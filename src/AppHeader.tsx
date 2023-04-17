import React from 'react';
import { Heading, Flex, Spacer, Button } from '@chakra-ui/react';

export const AppHeader = () => (
  <Flex verticalAlign="center">
    <Heading>Marvelous v2.0</Heading>
    <Spacer />
    <Button variant='link'>
      Delete all tasks
    </Button>
  </Flex>
);
