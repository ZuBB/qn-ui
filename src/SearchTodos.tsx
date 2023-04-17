import React from 'react';
import { Box, FormControl, Input } from '@chakra-ui/react';

export const SearchTodos = () => (
  <FormControl as={Box} mb="10">
    <Input name="q" placeholder="Search.." />
  </FormControl>
);
