import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';

// import { Container } from './styles';

export default function HelpOrderList() {
  const [helporder, setHelpOrder] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('students/help-orders', {
        where: { answer: null },
      });
      const studentresp = await api.get('students');

      setHelpOrder(response.data);
      setStudent(studentresp.data);
    }
    load();
  }, []);

  async function handleSubmit({ id, student_id, answer }) {
    await api.post('enrolls', {
      id,
      student_id,
      answer,
    });

    history.push('/students');
  }

  console.log(student);
  /*
  const studentname = useMemo(() => {
    const parseid = parseInt(selectplan);
    const parsedur = plan.find(p => p.id === parseplan);
    const total = parsedur.duration * parsedur.price;
    const formatTotal = formatPrice(total);
    return formatTotal;
  }, []);
  */
  return (
    <Wrapper>
      <div className="subheader">
        <h1>Pedidos de auxílio</h1>
      </div>

      <Content>
        <Form onSubmit={handleSubmit}>
          <tr>
            <td className="tableheader">ID do Aluno</td>
            <td className="tableheader">Pergunta</td>
            <td className="tableheader" />
            <td className="delete" />
          </tr>

          {helporder.map(h => (
            <tr key={h.id}>
              <td>{h.student_id}</td>

              <td>
                <text>{h.question}</text>
              </td>

              <td className="responder">
                <Link to={`/students/answer/${h.id}`}>responder</Link>
              </td>
            </tr>
          ))}
        </Form>
      </Content>
    </Wrapper>
  );
}
