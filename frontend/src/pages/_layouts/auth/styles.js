import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 415px;
  height:100%;
  max-height: 415px;
  text-align: center;
  background: white;
  border-radius: 4px;

  img {
    height: 130px;
    width: auto;
    padding: 10px;
    margin: 20px;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    height:100%;
    max-height: 315px;
    text-align: center;

    input {
      border-color: rgba(0,0,0,0.1);
      border-width: 1px;
      border-radius: 4px;

      margin: 10px 30px;
      padding: 15px;
      height: 44px;

      color: black;

      &::placeholder {
        color: rgba(0,0,0,0.3);
      }
    }

    span {
      color: purple;
      font-weight: bold;
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

    a {
      color: #FFF;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &hover {
        opacity: 1;
      }
    }
  }
`;
