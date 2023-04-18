import React, { useState } from 'react';
import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useTodoStore } from './store'
import { loadTodos } from './loadTodos'

const addTodoUrl = '/api/todos'

export const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const setTodos = useTodoStore(state => state.setTodos);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value)
  }

  const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      createTodo();
    }
  }

  const onCreateHandler = () => createTodo();

  const createTodo = async () => {
    try {
      await axios.post(addTodoUrl, { todo })
      setTodos(await loadTodos())
      setTodo('')
    } catch (error) {
      console.log('Error happened', error);
    }
  }

  return (
    <FormControl as={Flex} verticalAlign="center" mb="10">
      <Input
        name="todo"
        placeholder="Enter todo"
        required
        value={todo}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <Button ml="3" onClick={onCreateHandler}>Add</Button>
    </FormControl>
  );
}