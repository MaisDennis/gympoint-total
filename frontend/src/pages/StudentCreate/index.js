import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { Form, Input} from '@rocketseat/unform';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import { signUpRequest } from '~/store/modules/student/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({name, email, age, weight, height}) {
    dispatch(signUpRequest(name, email, age, weight, height))
  }

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Cadastro de aluno</h1>

      </div>
      <Content>
        <Form onSubmit={handleSubmit}>
          <div>
            <Link to="/students"><button className="left" type="button">Voltar</button></Link>
            <button className="right" type="submit" ><MdCheck/>Salvar</button>
          </div>

          <Input label="Nome Completo" name="name" type="name" placeholder="John Doe" />
          <Input label="Endereço de e-mail"name="email" type="email" placeholder="exemplo@email.com" />
          <Input label="Idade"name="age" type="string" />
          <Input label="Peso (em kg)"name="weight" type="string" />
          <Input label="Altura (em m)"name="height" type="string" />

        </Form>
    </Content>
  </Wrapper>
  );
}
