import React from 'react';
import { Box, Heading, List } from '@chakra-ui/react';
import { TodoItem } from './TodoItem'
import { useTodoStore } from './store'

type Props = {
  storeKey: 'completed' | 'incompleted';
  children: string | JSX.Element;
  listProps?: Object
}

export const GenericTodoList = (props: Props) => {
  const completedTodos = useTodoStore(state => state.todos)[props.storeKey];

  return (
    <Box>
      <Heading ml="5">{props.children}</Heading>
      <Box as="hr" mb="3" borderWidth="1px" borderColor="black" />

      <List {...props.listProps}>
        {completedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </List>
    </Box>
  );
}
