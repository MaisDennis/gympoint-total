import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)'],
})`
  flex: 1;
`;
