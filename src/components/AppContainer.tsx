import React, { useEffect, useCallback } from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { GenericTodoList } from './GenericTodoList';
import { AddTodo } from './AddTodo';
import { SearchTodos } from './SearchTodos';
import { useTodoStore } from '../store'
import { loadTodos } from '../loadTodos'

export const AppContainer = () => {
  const setTodos = useTodoStore(state => state.setTodos);
  const [searchParams] = useSearchParams();

  const getTodos = useCallback(
    async () => {
      try {
        setTodos(await loadTodos());
      } catch (error) {
        console.log('Error happened', error);
      }
    },
    [setTodos]
  );

  useEffect(() => { getTodos() }, [getTodos, searchParams])

  return (
    <Box
      w="50%"
      ml="25%"
      mr="25%"
      mt="10% !important"
      bgColor="#F7FAFC"
      padding="20px"
      borderRadius="md"
    >
      <AppHeader />
      <Flex direction="row" mt="10">
        <Flex direction="column" w="48%">
          <AddTodo />
          <GenericTodoList
            storeKey='incompleted'
            listProps={{maxH: "310px", overflowY: "scroll"}}
          >
            To Do
          </GenericTodoList>
        </Flex>
        <Spacer />
        <Flex direction="column" w="48%">
          <SearchTodos />
          <GenericTodoList storeKey='completed'>
            Done
          </GenericTodoList>
        </Flex>
      </Flex>
    </Box>
  );
};
