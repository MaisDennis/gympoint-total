import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '~/components/Button';
import Input from '~/components/Input';
import api from '~/services/api';
import { Container } from './styles';
import Background from '~/components/Background';

export default function HelpOrderAsk() {
  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    await api.post(`/students/${id}/help-orders`, { question });
    navigation.navigate('HelpOrder', { question });
  }

  return (
    <Container>
      <Input
        multiline
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={question}
        onChangeText={setQuestion}
      />
      <Button onPress={handleSubmit}>Novo pedido de auxílio</Button>;
    </Container>
  );
}

HelpOrderAsk.navigationOptions = {};
