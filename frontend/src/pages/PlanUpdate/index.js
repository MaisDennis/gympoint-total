import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { formatPrice } from '~/util/format';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';

export default function PlanUpdate({ match }) {
  // console.log(match, match.params);
  const { id } = match.params;
  console.log(id);

  async function handleSubmit({ title, duration, price }) {
    const plan = await api.put('plans', {
      id,
      title,
      duration,
      price,
    });

    history.push('/plans');
  }

  async function totalprice() {
    const price = await document.getElementById('price');
    const duration = await document.getElementById('duration');
    const mult = price.value * duration.value;

    const lastinput = await document.getElementById('totalinput');
    lastinput.value = formatPrice(mult, 0);
  }

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Edição de plano</h1>
      </div>

      <Content>
        <Form onSubmit={handleSubmit}>
          <div>
            <Link to="/plans">
              <button className="left" type="button">
                Voltar
              </button>
            </Link>
            <button className="right" type="submit">
              <MdCheck />
              Salvar
            </button>
          </div>

          <Input label="ID do Plano" name="id" type="id" value={id} disabled />
          <Input
            label="Título do Plano"
            name="title"
            type="name"
            placeholder=""
          />
          <Input
            label="Duração"
            name="duration"
            id="duration"
            type="number"
            onChange={totalprice}
          />
          <Input
            label="Preço Mensal"
            name="price"
            id="price"
            type="number"
            onChange={totalprice}
          />
          <Input
            label="Preço Total"
            name="totalinput"
            id="totalinput"
            type="string"
            disabled
          />
        </Form>
      </Content>
    </Wrapper>
  );
}
