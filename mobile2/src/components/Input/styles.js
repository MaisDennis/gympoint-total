import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0.15px;
  height: 46px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 1px;
  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: black;
`;
