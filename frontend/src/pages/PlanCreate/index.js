import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { Form, Input} from '@rocketseat/unform';
import { formatPrice } from '~/util/format';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api'

export default function PlanCreate() {

  async function handleSubmit({title, duration, price}) {
    await api.post('plans', {
      title,
      duration,
      price,
    });

    history.push('/plans');
  }

  async function totalprice() {
    const price = await document.getElementById("price");
    const duration = await document.getElementById("duration");
    const mult = price.value * duration.value

    const lastinput = await document.getElementById("totalinput");
    lastinput.value = formatPrice(mult,0)
  }

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Cadastro de plano</h1>
      </div>

      <Content>
        <Form onSubmit={handleSubmit}>
          <div>
            <Link to="/plans">
              <button className="left" type="button">Voltar</button>
            </Link>
          <button className="right" type="submit" ><MdCheck/>Salvar</button>
          </div>

          <Input label="Título do Plano" name="title" type="name" placeholder="" />
          <Input label="Duração"name="duration" id="duration" type="number" onChange={totalprice} />
          <Input label="Preço Mensal"name="price" id="price" type="number" onChange={totalprice}/>
          <Input label="Preço Total"name="totalinput" id="totalinput" type="string"  disabled/>

        </Form>
      </Content>

    </Wrapper>
  );
}
