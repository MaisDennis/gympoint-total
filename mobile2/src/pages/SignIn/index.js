import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logogym.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  /*
  async function handleSubmit() {
    const student = await document.getElementById('student_id');
    const response = await api.get('students', { id });
    try {
      console.log('Hello');
      response.find(response.data.id === student);
    } catch (err) {
      Alert.alert('Erro no login', 'Aluno inexistente');
    }
  }
  */

  const dispatch = useDispatch();
  const passwordRef = useRef();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [student, setStudent] = useState('');

  function handleSubmit() {
    console.tron.log(student);
    dispatch(signInRequest(student));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            id="student"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe o seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={student}
            onChangeText={setStudent}
          />

          <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
          <SignLink onPress={() => navigation.navigate('CheckIn')}>
            <SignLinkText>CheckIn</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
