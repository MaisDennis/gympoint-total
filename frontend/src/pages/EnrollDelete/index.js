import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';

// import { Container } from './styles';

export default function EnrollDelete({ match }) {
  const { id } = match.params;

  async function handleDelete() {
    await api.delete(`enrolls/${id}`, {});

    history.push('/enrolls');
  }

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Apagar Matrículas</h1>
      </div>

      <Content>
        <Form>
          <div className="del">
            A matrícula ID {id} será deletado. Confirmar?
          </div>
          <div>
            <Link to="/enrolls">
              <button className="left" type="button">
                Voltar
              </button>
            </Link>
            <button className="right" type="button" onClick={handleDelete}>
              {' '}
              Confirmar
            </button>
          </div>
        </Form>
      </Content>
    </Wrapper>
  );
}
