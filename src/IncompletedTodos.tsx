import React from 'react';
import { Box, Heading, List } from '@chakra-ui/react';
import { TodoItem } from './TodoItem'
import { useTodoStore } from './store'

export const IncompletedTodos = () => {
  const incompletedTodos = useTodoStore(state => state.todos).incompleted;

  return (
    <Box>
      <Heading ml="5">Todo</Heading>
      <Box as="hr" mb="3" borderWidth="1px" borderColor="black" />

      <List maxH="310px" overflowY="scroll">
        {incompletedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </List>
    </Box>
  );
}
