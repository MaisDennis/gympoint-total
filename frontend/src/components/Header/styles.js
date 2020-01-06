import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 20px;
  width: 95%;
  margin: 30px;
  border-radius: 4px;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 40px;
      margin-right: 30px;
      padding-right: 30px;
    }

    ul {
      li {
        display: inline;
        text-transform: uppercase;
        font-size: 16px;
        padding: 10px;
      }
    }

    a {
      font-weight: bold;
      color: #666666;
    }
  }

  aside {
    position: relative;
    max-width: 300px;
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    position: relative;
    float: right;

    strong {
      color: #333;
      font-size: 16px;
      padding: 0;
      margin: 0;
    }

    button.sair {
      color: #ee4d64;
      background: none;
      font-size: 12px;
      padding: 0;
      margin: 0;
    }
  }
`;
