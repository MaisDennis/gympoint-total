import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '~/assets/logo.png';
import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {

  const username = useSelector(state => state.user.profile.name);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <ul>
            <li><Link to="/students">Alunos</Link></li>
            <li><Link to="/plans">Planos</Link></li>
            <li><Link to="/enrolls">Matrículas</Link></li>
            <li><Link to="/students/help-orders">Pedidos de Auxílio</Link></li>
          </ul>

        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{username}</strong>
                <button className="sair" type="button" onClick={handleSignOut}>Sair do Sistema</button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
