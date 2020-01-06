import React, {useState, useEffect} from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';
import HelpOrder from '~/pages/HelpOrderList'

// import { Container } from './styles';

export default function Answer({match}) {

  const {id} = match.params;
  console.log(id);


  console.log(HelpOrder.helporder);




  return (

    <Wrapper>
     <div className="subheader">
      <h1>Resposta</h1>

    </div>
    <Content>

    <Form>
      <div>
      <Link to="/students/help-orders"><button className="left" type="button">Voltar</button></Link>
      <button className="right" type="submit" ><MdCheck/>Responder Aluno</button>
      </div>


    </Form>
  </Content>
  </Wrapper>

  );
}
