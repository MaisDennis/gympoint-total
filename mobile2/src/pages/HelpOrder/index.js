import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { Container, List } from './styles';
import Button from '~/components/Button';
import HelpOrderComp from '~/components/HelpOrderComp';
import api from '~/services/api';

export default function HelpOrder({ navigation }) {
  const [helpOrders, setHelpOrders] = useState();
  console.tron.log(helpOrders);
  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('students/help-orders', {
        where: { answer: null },
      });
      setHelpOrders(response.data);
    }
    loadHelpOrders();
  }, []);

  return (
    <Container>
      <Button
        onPress={() => {
          navigation.navigate('HelpOrderAsk');
        }}
      >
        Novo Pedido de Ajuda
      </Button>
      <List
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <HelpOrderComp data={item} />}
      />
    </Container>
  );
}
