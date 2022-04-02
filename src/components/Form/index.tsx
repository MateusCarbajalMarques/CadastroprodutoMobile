import React from 'react';
import { Alert } from 'react-native';
import { Button } from '../Button';
import { ControllerInput } from '../controllerInput';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../../src/services/api';

type FormData = {
  image: string
  nome: string;
  descricao: string;
  codigo_barra: Number;
  preco: Number;
  categoria: string;
}

const schema = yup.object({
  image: yup.string().required("Informe o link no servidor da imagem"),
  nome: yup.string().required("Preencha o campo"),
  descricao: yup.string().required("Informe a descrição do produto"),
  codigo_barra: yup.number().required("Informe o codigo de barra"),
  preco: yup.number().required("Informe o preço do produto"),
  categoria: yup.string().required("Informe a categoria do produto"),
})

export function Form() {

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });


 async  function handleUserRegister(data: FormData) {
    const response = await api.post("/produtos",{
      image: data.image,
      nome: data.nome,
      descricao:data.descricao,
      codigo_barra:data.codigo_barra,
      preco: data.preco,
      categoria: data.categoria
  });

if(response === null){
    Alert.alert('Erro ao enviar seu orçamento.','Algo deu errado');
}
    Alert.alert('Seu orçamento foi enviado.','Embreve você receberam seu orçamento, feito por nossos profissionais')

  }


  return (
    <Container>
      <ControllerInput
        name='image'
        control={control}
        icon="image"
        placeholder="Imagen em link do produto"
        error={errors.nome}
      />

      <ControllerInput
        name='nome'
        control={control}
        icon="package"
        placeholder="Nome"
        error={errors.nome}
      />

      <ControllerInput
        name='descrição'
        control={control}
        icon="user"
        placeholder="Descrição do produto"
        error={errors.descricao}
      />

      <ControllerInput
        name='codigo_barra'
        control={control}
        icon="align-justify"
        placeholder="Informe codigo de barra"
        error={errors.nome}
      />

      <ControllerInput
        name='preco'
        control={control}
        icon="dollar-sign"
        placeholder="Informe preço do produto"
        error={errors.nome}
      />


      <ControllerInput
        name='categoria'
        control={control}
        icon="shopping-bag"
        placeholder="Informe a categoria "
        error={errors.nome}
      />


      <Button
        title="Cadastrar"
        onPress={handleSubmit(handleUserRegister)}
      />
    </Container>
  )
}