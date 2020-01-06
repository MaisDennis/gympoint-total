import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Left, Info, Time } from './styles';

export default function HelpOerderComp({ data }) {
  const rawdate = data.createdAt;
  const formatDate = useMemo(() => {
    return formatRelative(parseISO(rawdate), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [rawdate]);

  return (
    <Container>
      <Left />
      <Info>{data.question}</Info>
      <Info>
        <Time>{formatDate}</Time>
      </Info>
    </Container>
  );
}
