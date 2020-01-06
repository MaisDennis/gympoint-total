import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import { formatPrice } from '~/util/format';
import api from '~/services/api';

// import { Container } from './styles';

export default function PlanList() {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('plans');
      setPlan(response.data);
    }
    load();
  }, []);

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Gerenciando planos</h1>
        <Link to="/plans/create">
          <button className="right" type="button">
            {' '}
            + Cadastrar
          </button>
        </Link>
      </div>

      <Content>
        <Form>
          <tr>
            <td className="tableheader">Título</td>
            <td className="tableheader">Duração</td>
            <td className="tableheader">Preço</td>
            <td className="edit" />
            <td className="delete" />
          </tr>

          {plan.map(p => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>
                {p.duration === 1 ? (
                  <p>{p.duration} mês</p>
                ) : (
                  <p>{p.duration} meses</p>
                )}
              </td>
              <td>{formatPrice(p.price)}</td>
              <td className="edit">
                <Link to={`/plans/update/${p.id}`}>editar</Link>
              </td>
              <td className="delete">
                <Link to={`/plans/${p.id}/delete`}>apagar</Link>
              </td>
            </tr>
          ))}
        </Form>
      </Content>
    </Wrapper>
  );
}
