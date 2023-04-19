import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { AppContainer } from './AppContainer';
import { InfoModalToggle } from './InfoModalToggle';

export const Home = () => (
  <VStack>
    <Flex justify="right" width="100%">
      <InfoModalToggle />
    </Flex>
    <AppContainer />
  </VStack>
);
