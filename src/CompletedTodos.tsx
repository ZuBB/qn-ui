import React from 'react';
import { Box, Heading, List } from '@chakra-ui/react';
import { TodoItem } from './TodoItem'
import { useTodoStore } from './store'

export const CompletedTodos = () => {
  const completedTodos = useTodoStore(state => state.todos).completed;

  return (
    <Box>
      <Heading ml="5">Done</Heading>
      <Box as="hr" mb="3" borderWidth="1px" borderColor="black" />

      <List>
        {completedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </List>
    </Box>
  );
}
