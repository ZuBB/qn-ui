import React from 'react';
import {
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useEditableControls
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { Todo } from '../interfaces';
import { emitter } from '../event-bus';

type Props = {
  todo: Todo
}

const getTodoUrl = (id: number): string => `/api/todos/${id}`;

export const TodoItemEditableControls = ({ todo }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  const onDeleteHandler = () => {
    const deleteTodo = async () => {
      await axios.delete(getTodoUrl(todo.id));
      emitter.emit('load-todos');
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
      <>
        <ButtonGroup
          ml="4"
          display="none"
          _groupHover={{ display: 'inline-flex' }}
        >
          <IconButton
            minW="1"
            aria-label='Delete'
            icon={<DeleteIcon />}
            variant="link"
            onClick={onOpen}
          />
          <IconButton
            minW="1"
            aria-label='Change'
            icon={<EditIcon />}
            variant="link"
            {...getEditButtonProps()}
          />
        </ButtonGroup>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Do you want to delete all todos?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Pleace click <b>Delete</b> button to confirm deletion of all todos
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onDeleteHandler}>
                Delete
              </Button>
              <Button variant='ghost' onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  };

  return isEditing
    ? getContentInEditMode()
    : getContentInDefaultMode();
}
