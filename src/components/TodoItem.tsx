import React from 'react';
import {
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Input,
  ListItem,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { TodoItemEditableControls } from './TodoItemEditableControls';
import { useTodoStore } from './store';
import { loadTodos } from './loadTodos';
import { Todo } from './interfaces';


import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'


const getTodoUrl = (id: number): string => `/api/todos/${id}`;

type Props = {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  const setTodo = useTodoStore(state => state.setTodos);

  const onChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const completed = event.currentTarget.checked
    await axios.patch(getTodoUrl(todo.id), { completed })
    setTodo(await loadTodos())
  }

  const onDeleteHandler = () => {
    const deleteTodo = async () => {
      await axios.delete(getTodoUrl(todo.id));
      setTodo(await loadTodos());
    };

    deleteTodo();
  }

  return (
    <ListItem>
      <Flex role="group">
        <Checkbox isChecked={todo.completed} onChange={onChangeHandler}>
          <Text as="span" fontSize="2xl">
            {todo.todo}
          </Text>
        </Checkbox>

        <Editable
          defaultValue={todo.todo}
          fontSize='2xl'
          isPreviewFocusable={false}
          display="flex"
        >
          {/* <EditablePreview /> */}
          <Input
            w="85%"
            size="sm"
            as={EditableInput}
          />
          <TodoItemEditableControls id={todo.id} />
        </Editable>
        {/* <IconButton
          mx="-12px !important"
          aria-label='Delete'
          icon={<DeleteIcon />}
          variant="link"
          onClick={onDeleteHandler}
        /> */}
      </Flex>
    </ListItem>
  );
}