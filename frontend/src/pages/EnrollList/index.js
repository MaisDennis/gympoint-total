import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import check from '~/assets/check.svg';
import empty from '~/assets/empty.svg';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';

// import { Container } from './styles';

export default function EnrollList() {
  const [enroll, setEnroll] = useState([]);
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('enrolls');
      setEnroll(response.data);
    }
    load();
  }, []);

  const formattedDate = fdate =>
    format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Gerenciando matrículas</h1>
        <Link to="/enrolls/create">
          <button className="right" type="button">
            {' '}
            + Cadastrar
          </button>
        </Link>
      </div>
      <Content>
        <Form>
          <tr>
            <td className="tableheader">ID Aluno</td>
            <td className="tableheader">ID Plano</td>
            <td className="tableheader">Início</td>
            <td className="tableheader">Término</td>
            <td className="tableheader">Ativa</td>
          </tr>

          {enroll.map(e => (
            <tr key={e.id}>
              <td>{e.student_id}</td>
              <td>{e.plan_id}</td>
              <td>{formattedDate(e.start_at)}</td>
              <td>{formattedDate(e.end_at)}</td>
              <td>
                {e.active ? (
                  <img className="check" src={check} size={5} alt="Check" />
                ) : (
                  <img className="check" src={empty} size={5} alt="Check" />
                )}
              </td>

              <td className="edit">
                <Link to={`/enrolls/update/${e.student_id}`}>editar</Link>
              </td>
              <td className="delete">
                <Link to={`/enrolls/delete/${e.id}`}>apagar</Link>
              </td>
            </tr>
          ))}
        </Form>
      </Content>
    </Wrapper>
  );
}
