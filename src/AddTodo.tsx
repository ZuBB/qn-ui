import React from 'react';
import { Button, Flex, FormControl, Input } from '@chakra-ui/react';

export const AddTodo = () => (
  <FormControl as={Flex} verticalAlign="center" mb="10">
    <Input name="todo" placeholder="Enter todo" required />
    <Button ml="3">Add</Button>
  </FormControl>
);
