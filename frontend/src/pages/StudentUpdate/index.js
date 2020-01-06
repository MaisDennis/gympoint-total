import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { Form, Input} from '@rocketseat/unform';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api'

export default function StudentUpdate({match}) {
  // console.log(match, match.params);
  const {id} = match.params;
   console.log(id);

  async function handleSubmit({ name, email: email_student, age, weight, height}) {
    await api.put('students', {
      id,
      name,
      email_student,
      age,
      weight,
      height
    });

    history.push('/students');
  }

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Edição de aluno</h1>

      </div>
      <Content>
        <Form onSubmit={handleSubmit}>
          <div>
            <Link to="/students"><button className="left" type="button">Voltar</button></Link>
            <button className="right" type="submit" ><MdCheck/>Salvar</button>
          </div>

          <Input label="ID do aluno" name="id" type="id" value={id} disabled />
          <Input label="Nome Completo" name="name" type="name"/>
          <Input label="Endereço de e-mail"name="email" type="email" />
          <Input label="Idade"name="age" type="string" />
          <Input label="Peso (em kg)"name="weight" type="string" />
          <Input label="Altura (em m)"name="height" type="string" />

        </Form>
      </Content>
    </Wrapper>
  );
}
