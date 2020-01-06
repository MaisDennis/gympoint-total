import React, { useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Left, Info, Time } from './styles';

export default function CheckInComp({ data }) {
  const rawdate = data.createdAt;
  const formatDate = useMemo(() => {
    return formatDistance(parseISO(rawdate), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [rawdate]);

  return (
    <Container>
      <Left />
      <Info>Check-In #1</Info>
      <Info>
        <Time>{formatDate}</Time>
      </Info>
    </Container>
  );
}

/*
renderItem={({ item, index }) => (
  <Checkin>
    <CheckinNumber>Check-in #{index + 1}</CheckinNumber>
    <CheckinTime>{item.timeFormatted}</CheckinTime>
  </Checkin>
)}
*/
