import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div.subheader {
    width: 100%;

    h1 {
      position: relative;
      float: left;
      margin: 20px 10px;
      color: #444444;
    }
  }

  button {
    margin: 20px 10px;
    height: 40px;
    width: 120px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    text-transform: uppercase;
  }

  button.left {
    background: #999999;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.07, '#999999')};
    }
  }
  button.right {
    background: #ee4d64;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.07, '#ee4d64')};
    }
  }

  div.panel {
    position: absolute;
    left: center;
    top: center;
    width: 50%;
    height: 60%;
    background: white;
    opacity: 0.9;
    border: 100px;
    border-style: solid;
    border-color: #444;
    border-radius: 4px;
    z-index: 5;
    display: ${props => (props.visible ? 'block' : 'none')};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-height: 500px;
  text-align: center;
  background: white;
  border-radius: 4px;
  padding: 0 60px;
  overflow: auto;

  img {
    height: 130px;
    width: auto;
    padding: 10px;
    margin: 20px;
  }

  a {
    color: red;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &hover {
      opacity: 1;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-height: 315px;
    text-align: center;

    div.del {
      position: relative;
      float: left;
      font-size: 16px;
      margin: 50px 10px 20px;
      color: #444444;
    }

    button {
      margin: 10px 30px;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#ee4d64')};
      }
    }

    button.left {
      background: #999999;
      transition: background 0.2s;
      margin: 20px 10px;

      &:hover {
        background: ${darken(0.07, '#999999')};
      }
    }

    button.right {
      background: #ee4d64;
      transition: background 0.2s;
      margin: 20px 10px;

      &:hover {
        background: ${darken(0.07, '#ee4d64')};
      }
    }

    input {
      border-color: rgba(0, 0, 0, 0.1);
      border-width: 1px;
      border-radius: 4px;
      margin: 10px 30px;
      padding: 15px;
      height: 44px;
      color: black;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    input.ans {
      width: 80%;
      text-align: justify;
    }

    select {
      border-color: rgba(0, 0, 0, 0.1);
      border-width: 1px;
      border-radius: 4px;
      margin: 10px 30px;
      padding: 10px;
      height: 44px;
      color: black;
      background: white;

      option {
      }
    }
  }

  tr {
    line-height: 20px;
    margin: 0 40px 0 40px;
    padding: 20px;
    border-bottom: solid;
    border-bottom-color: lightgrey;
    border-width: 1px;

    td {
      font-size: 18px;
      width: 280px;
      text-align: center;
    }

    td.tableheader {
      font-size: 18px;
      color: #444444;
    }

    td.name {
      color: #666666;
    }

    td.email {
      color: #666666;
    }

    td.age {
      color: #666666;
    }

    td.edit {
      font-size: 16px;
      color: blue;
      width: 100px;
    }

    td.delete {
      font-size: 16px;
      color: red;
      width: 100px;
    }

    button.sair {
      color: #ee4d64;
      background: none;
      font-size: 12px;
      padding: 0;
      margin: 0;
    }
  }

  img.check {
    width: 22px;
    height: 22px;
    margin: 0;
    padding: 0;
  }
`;
