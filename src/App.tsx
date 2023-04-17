import React from 'react';
import { ChakraProvider, VStack, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppContainer } from './AppContainer';

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack>
      <ColorModeSwitcher alignSelf="end" />
      <AppContainer />
    </VStack>
  </ChakraProvider>
);
