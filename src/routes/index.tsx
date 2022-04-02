import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Cadastro} from '../screens/Cadastro';
import {List} from '../screens/Lista';

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={{
    headerShown: false,
    
  }}>

    <Auth.Screen name='List' component={List} />
    <Auth.Screen name='Cadastro' component={Cadastro}/>
  </Auth.Navigator>
);

export default AuthRoutes;