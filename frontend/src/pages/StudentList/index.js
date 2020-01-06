import React, {useState, useEffect} from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Wrapper, Content } from '~/pages/_layouts/default/styles';
import api from '~/services/api';

export default function StudentList() {

  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('students');
        setStudent(response.data)
    }
    load();
  },[]);

  return (
    <Wrapper>
      <div className="subheader">
        <h1>Gerenciando alunos</h1>
        <Link to="/students/create">
          <button className="right" type="button"> + Cadastrar</button>
        </Link>
      </div>

      <Content>
        <div className="panel">Hello</div>
        <Form>

          <tr>
            <td className="tableheader">NOME</td>
            <td className="tableheader">EMAIL</td>
            <td className="tableheader">IDADE</td>
            <td className="edit" />
            <td className="delete" />
          </tr>

          {student.map(s => (
            <tr key = {s.id}>
              <td >{s.name}</td>
              <td >{s.email_student}</td>
              <td >{s.age}</td>
              <td  className="edit"><Link to={`/students/update/${s.id}`}>editar</Link></td>
              <td  className="delete"><Link to={`/students/delete/${s.id}`}>apagar</Link></td>
            </tr>
          ))}
        </Form>
     </Content>
   </Wrapper>

  );
}
