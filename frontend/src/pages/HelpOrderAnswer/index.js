import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';

// import { Container } from './styles';

export default function HelpOrderAnswer({ match }) {
  const { id } = match.params;
  const [helporder, setHelpOrder] = useState([]);
  const [quest, setQuest] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('students/help-orders', {
        where: { answer: null },
      });
      setHelpOrder(response.data);
    }
    load();
  }, []);

  const selHelp = useMemo(() => {
    const parseid = parseInt(id);
    const parsehelp = helporder.find(p => p.id === parseid);
    setQuest(parsehelp);
  }, [helporder, id]);

  async function handleSubmit({ answer }) {
    await api.put(`help-orders/${id}/answer`, {
      id,
      answer,
    });
    history.push('/students/help-orders');
  }
  /*
  async function calcHelp() {
    const parseid = parseInt(id);
    const parsehelp = await helporder.find(p => p.id === parseid);
    setQuestion(parsehelp);
  }

  <Input
            label="Pergunta do aluno"
            name="question"
            type="text"
            value={helporder.map(q => q.question)}
            disabled
          />
  */

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Resposta ao Aluno</h1>
      </div>
      <Content>
        <Form onSubmit={handleSubmit}>
          <div>
            <Link to="/students/help-orders">
              <button className="left" type="button">
                Voltar
              </button>
            </Link>
            <button className="right" type="submit">
              <MdCheck />
              Salvar
            </button>
          </div>

          <Input
            className="ans"
            label="Resposta ao Aluno"
            name="answer"
            type="text"
          />
        </Form>
      </Content>
    </Wrapper>
  );
}
