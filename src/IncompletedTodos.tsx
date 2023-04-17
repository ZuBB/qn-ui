import React from 'react';
import { Box, Heading, List } from '@chakra-ui/react';
import { TodoItem } from './TodoItem'

const items = [
  {todo: 'this is static todo', completed: false, id: 1}
]

export const IncompletedTodos = () => {
  return (
    <Box>
      <Heading ml="5">Todo</Heading>
      <Box as="hr" mb="3" borderWidth="1px" borderColor="black" />

      <List>
        {items.map(todo => <TodoItem todo={todo} />)}
      </List>
    </Box>
  );
}
