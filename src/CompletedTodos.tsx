import React from 'react';
import { Box, Heading, List } from '@chakra-ui/react';
import { TodoItem } from './TodoItem'

const items = [
  {todo: 'another todo', completed: true, id: 2}
]

export const CompletedTodos = () => {
  return (
    <Box>
      <Heading ml="5">Done</Heading>
      <Box as="hr" mb="3" borderWidth="1px" borderColor="black" />

      <List>
        {items.map(todo => <TodoItem todo={todo} />)}
      </List>
    </Box>
  );
}
