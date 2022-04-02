import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Text } from 'react-native';
import { Form } from '../../components/Form';

import { Container, Header, Subtitle, Title } from './styles';
import { useNavigation } from '@react-navigation/native';


export function List() {
  const navigation = useNavigation<any>();
  return (
    <Container>
          <Header>
      <Title>
        Lista de Produto Cadastrado
      </Title>

      <Subtitle onPress={() => navigation.navigate('Cadastro')}>
       <Text>Adicionar mais produto</Text> 
      </Subtitle>

      </Header>
   
      <ScrollView>

      </ScrollView>
    </Container >
   
  );
}