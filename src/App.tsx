import React from 'react';
import { ChakraProvider, VStack, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { AppContainer } from './components/AppContainer';
import { Route, Routes } from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </ChakraProvider>
);

const Home = () => (
  <VStack>
    <ColorModeSwitcher alignSelf="end" />
    <AppContainer />
  </VStack>
)
