import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';

// import { Container } from './styles';

export default function PlanDelete({ match }) {
  const { id } = match.params;

  async function handleDelete() {
    await api.delete(`plans/${id}`, {});

    history.push('/plans');
  }

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Apagar plano</h1>
      </div>

      <Content>
        <Form>
          <div className="del">O plano ID {id} será deletado. Confirmar?</div>
          <div>
            <Link to="/plans">
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
