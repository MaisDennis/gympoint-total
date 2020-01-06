import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';

export default function StudentDelete({ match }) {
  const { id } = match.params;
  const idn = Number(id);
  console.log(idn);

  async function handleDelete() {
    console.log(idn);
    const exterminate = await api.delete(`students/${id}`, {});
    history.push('/students');
  }

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Apagar plano</h1>
      </div>

      <Content>
        <Form>
          <div className="del">O aluno ID {id} será deletado. Confirmar?</div>
          <div>
            <Link to="/students">
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
