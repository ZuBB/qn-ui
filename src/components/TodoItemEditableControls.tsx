import React from 'react';
import { ButtonGroup, HStack, IconButton, useEditableControls } from '@chakra-ui/react';
import axios from 'axios';
import { useTodoStore } from './store';
import { loadTodos } from './loadTodos';
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'

const getTodoUrl = (id: number): string => `/api/todos/${id}`;

type Props = {
  id: number
}

export const TodoItemEditableControls = ({ id }: Props) => {
  const setTodo = useTodoStore(state => state.setTodos);

  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()

  const onDeleteHandler = () => {
    const deleteTodo = async () => {
      await axios.delete(getTodoUrl(id));
      setTodo(await loadTodos());
    };

    deleteTodo();
  }

  const getContentInEditMode = () => {
    return (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton
          aria-label='Update'
          icon={<CheckIcon />}
          variant="link"
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label='Discard'
          icon={<CloseIcon />}
          variant="link"
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    )
  };

  const getContentInDefaultMode = () => {
    return (
      <ButtonGroup
        ml="2"
        display="none"
        _groupHover={{ display: 'inline-flex' }}
      >
        <IconButton
          mx="-12px !important"
          aria-label='Delete'
          icon={<DeleteIcon />}
          variant="link"
          onClick={onDeleteHandler}
        />
        <IconButton
          mx="-8px"
          aria-label='Change'
          icon={<EditIcon />}
          variant="link"
          {...getEditButtonProps()}
        />
      </ButtonGroup>
    )
  };

  return isEditing ? getContentInEditMode() : getContentInDefaultMode()
}
