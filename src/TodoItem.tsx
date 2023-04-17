import React from 'react';
import {
  ListItem ,
  FormControl,
  FormLabel,
  Checkbox
} from '@chakra-ui/react';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

type Props = {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <ListItem>
      <FormControl>
        <FormLabel>
          <Checkbox isChecked={todo.completed}>{todo.todo}</Checkbox>
        </FormLabel>
      </FormControl>
    </ListItem>
  );
}
