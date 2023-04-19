import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppContainer } from './AppContainer';
import { InfoModalToggle } from './InfoModalToggle';

export const Home = () => (
  <VStack>
    <Flex justify="right" width="100%">
      <InfoModalToggle />
      <ColorModeSwitcher />
    </Flex>
    <AppContainer />
  </VStack>
);
