import React from 'react';
import {
  Checkbox,
  Editable,
  EditableInput,
  Flex,
  Input,
  ListItem,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { TodoItemEditableControls } from './TodoItemEditableControls';
import { Todo } from '../interfaces';
import { emitter } from '../event-bus';

type Props = {
  todo: Todo
}

const getTodoUrl = (id: number): string => `/api/todos/${id}`;

export const TodoItem = ({ todo }: Props) => {
  const onToggleHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const completed = event.currentTarget.checked;
    await axios.patch(getTodoUrl(todo.id), { completed });
    emitter.emit('load-todos');
  };

  const onUpdateHandler = (newTodo: string) => {
    const updateTodo = async () => {
      await axios.patch(getTodoUrl(todo.id), { todo: newTodo });
      emitter.emit('load-todos');
    };

    updateTodo();
  };

  return (
    <ListItem>
      <Flex role="group">
        <Checkbox isChecked={todo.completed} onChange={onToggleHandler}>
          <Text as="span" fontSize="2xl">
            {todo.todo}
          </Text>
        </Checkbox>

        <Editable
          defaultValue={todo.todo}
          fontSize='2xl'
          isPreviewFocusable={false}
          display="flex"
          onSubmit={onUpdateHandler}
          onCancel={onUpdateHandler}
        >
          <Input w="85%" size="sm" as={EditableInput} />
          <TodoItemEditableControls todo={todo} />
        </Editable>
      </Flex>
    </ListItem>
  );
}
