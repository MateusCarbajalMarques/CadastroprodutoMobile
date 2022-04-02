import React from 'react';
import { Cadastro } from './src/screens/Cadastro';
import { List } from './src/screens/Lista';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
export default function App() {
  return (
    <NavigationContainer>
    <Routes/>
    </NavigationContainer>
  );
}