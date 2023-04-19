import React, { useCallback, useEffect } from 'react';
import { Box, Flex, Spacer, useToast } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { AllTodos } from '../interfaces'
import { useTodoStore } from '../store'
import { emitter } from '../event-bus'
import { AppHeader } from './AppHeader';
import { GenericTodoList } from './GenericTodoList';
import { AddTodo } from './AddTodo';
import { SearchTodos } from './SearchTodos';

const addTodoUrl = '/api/todos'
const syncUrl = '/api/todos/latest-timestamp';

export const AppContainer = () => {
  const toast = useToast();
  const [searchParams] = useSearchParams();
  const setTodos = useTodoStore(state => state.setTodos);
  const { latestTimestamp } = useTodoStore(state => state.todos);

  // method that loads todos
  const getTodos = useCallback(
    async () => {
      try {
        const finalUrl = addTodoUrl + '?' + window.location.search.toString();
        const { data } = (await axios.get<AllTodos>(finalUrl));
        setTodos(data);
      } catch (error) {
        toast({ status: 'error', title: 'Error occured during loading of todos' })
      }
    },
    [setTodos, toast]
  );

  // a hook to init listening of events that actually trigger loading of todos
  useEffect(() => {
    const unbind = emitter.on('load-todos', () => {
      getTodos();
    })

    return () => { unbind() }
  }, [getTodos])

  // a hook to invoke 1st loading of todos
  useEffect(() => { emitter.emit('load-todos') }, [searchParams])

  // a hook to invoke 2+ loading of todos
  useEffect(() => {
    const keepTodosInSync = async () => {
      try {
        const { data } = (await axios.get(syncUrl));
        const newLatestModified = data.latestModified

        if (newLatestModified > latestTimestamp) {
          emitter.emit('load-todos');
        }
      } catch (error) {
        toast({ status: 'error', title: 'Sync error happened' })
      }
    }

    const timeoutId = setInterval(keepTodosInSync, 1000 * 60);

    return () => { clearInterval(timeoutId) }
  }, [latestTimestamp, toast]);

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
