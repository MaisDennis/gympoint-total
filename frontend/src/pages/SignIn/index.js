import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png'
// import { Container } from './styles';
import { Content } from '~/pages/_layouts/auth/styles';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {

  const dispatch = useDispatch();
  const loading=useSelector(state => state.auth.loading);

  function handleSubmit({email, password}) {
    dispatch(signInRequest(email, password));
    // console.tron.log(data)
  }
  return (

  <Content>
    <img src={logo} alt="Gympoint"/>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="exemplo@email.com" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />
      <button type="submit">{ loading ? 'Carregando...' : 'Entrar no sistema'}</button>

    </Form>
  </Content>

  );
}
