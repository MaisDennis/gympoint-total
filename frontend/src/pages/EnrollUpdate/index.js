import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import { addMonths, format, parseISO } from 'date-fns';
import history from '~/services/history';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';
import { formatPrice } from '~/util/format';

export default function EnrollUpdate({ match }) {
  const { id } = match.params;
  console.log(id);

  const [plan, setPlan] = useState([]);
  const [student, setStudent] = useState([]);
  const [selectplan, setSelectplan] = useState([]);
  const [selectdate, setSelectdate] = useState([]);

  const planoptions = plan.map(p => ({ id: p.id, title: p.title }));

  useEffect(() => {
    async function load() {
      const response = await api.get('plans');
      setPlan(response.data);
    }
    load();
  }, []);

  async function handleSubmit({ id, plan_id, start_at }) {
    await api.put('enrolls', {
      id,
      plan_id,
      start_at,
    });
    history.push('/enrolls');
  }

  const priceCalculation = useMemo(() => {
    if (selectplan > 0) {
      const parseplan = parseInt(selectplan);
      const parsedur = plan.find(p => p.id === parseplan);
      const total = parsedur.duration * parsedur.price;
      const formatTotal = formatPrice(total);
      return formatTotal;
    }
    return 0;
  }, [plan, selectplan]);

  const dateCalculation = useMemo(() => {
    if (selectdate != 0) {
      const parseplan = parseInt(selectplan);
      const parsedur = plan.find(p => p.id === parseplan);
      const endDate = addMonths(parseISO(selectdate), parsedur.duration);
      const formatEndDate = format(endDate, 'yyyy-MM-dd');
      return formatEndDate;
    }
    return 0;
  }, [plan, selectdate, selectplan]);

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Edição de matrícula</h1>
      </div>
      <Content>
        <Form onSubmit={handleSubmit}>
          <div>
            <Link to="/enrolls">
              <button className="left" type="button">
                Voltar
              </button>
            </Link>
            <button className="right" type="submit">
              <MdCheck />
              Salvar
            </button>
          </div>

          <Input label="ID do Aluno" name="id" type="id" value={id} disabled />

          <label>Plano</label>
          <Select
            name="plan_id"
            options={planoptions}
            defaultValue="0"
            onChange={e => setSelectplan(e.target.value)}
          />

          <Input
            label="Data de Início"
            name="start_at"
            id="start_at"
            type="date"
            defaultValue={1000}
            onChange={d => setSelectdate(d.target.value)}
          />
          <Input
            label="Data de Término"
            name="end_at"
            type="date"
            disabled
            value={dateCalculation}
          />
          <Input
            label="Valor Final"
            name="final_price"
            disabled
            value={priceCalculation}
          />
        </Form>
      </Content>
    </Wrapper>
  );
}
