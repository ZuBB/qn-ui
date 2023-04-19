import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home';

export const App = () => (
  <ChakraProvider
    theme={theme}
    toastOptions={{ defaultOptions: { position: 'top', duration: 4000 } }}
  >
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </ChakraProvider>
);
