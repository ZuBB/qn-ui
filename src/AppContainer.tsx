import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { AppHeader } from './AppHeader';
import { IncompletedTodos } from './IncompletedTodos';
import { CompletedTodos } from './CompletedTodos';
import { AddTodo } from './AddTodo';
import { SearchTodos } from './SearchTodos';

export const AppContainer = () => {
  return (
    <Box
      w="40%"
      ml="30%"
      mr="30%"
      mt="10% !important"
      bgColor="lightgray"
      padding="20px"
      borderRadius="md"
    >
      <AppHeader />
      <Flex direction="row" mt="10" w="100%" >
        <Flex direction="column" w="48%">
          <AddTodo />
          <IncompletedTodos />
        </Flex>
        <Spacer />
        <Flex direction="column" w="48%">
          <SearchTodos />
          <CompletedTodos />
        </Flex>
      </Flex>

    </Box>
  );
};
