import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Container, List } from './styles';
import Button from '~/components/Button';
import CheckInComp from '~/components/CheckInComp';
import api from '~/services/api';

const data = [1, 2, 3, 4, 5];

export default function CheckIn() {
  const studentid = useSelector(state => state.auth.userId);
  // console.tron.log(studentid);
  const [checks, setChecks] = useState([]);

  useEffect(() => {
    async function loadCheckIns() {
      const response = await api.get(`students/${studentid}/checkins`);

      setChecks(response.data);
    }
    loadCheckIns();
  }, []);
  // console.tron.log(checks);

  async function handleCheckIn() {
    try {
      await api.post(`students/${studentid}/checkins`);
    } catch (err) {
      // Alert.alert('Falha no Check-in', 'Verifique ID');
    }
  }

  return (
    <Background>
      <Container>
        <Button onPress={handleCheckIn}>Novo Check-In</Button>
        <List
          data={checks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CheckInComp data={item} />}
        />
      </Container>
    </Background>
  );
}

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-Ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="navigation" size={20} color={tintColor} />
  ),
};
