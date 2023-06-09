import React, { useState } from 'react';
import { Button, Flex, FormControl, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { emitter } from '../event-bus';
import { getMessageFromBeResonse } from '../utils'

const addTodoUrl = '/api/todos'

export const AddTodo = () => {
  const toast = useToast();
  const [todo, setTodo] = useState('');

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  }

  const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      createTodo();
    }
  };

  const onCreateHandler = () => createTodo();

  const createTodo = async () => {
    try {
      const newTodo = await (await axios.post(addTodoUrl, { todo })).data
      toast({ status: 'success', title: `Todo "${newTodo.todo}" created!` })
      setTodo('')
    } catch (error) {
      toast({ status: 'error', title: getMessageFromBeResonse(error) })
    } finally {
      emitter.emit('load-todos');
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