import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #F4F5F6;
  padding: 24px;
`;


export const Header = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #47474D;
  margin-top: 60px;
`;

export const Subtitle = styled(TouchableOpacity)`
  font-size: 18px;
  color: #7A7A80;
  line-height: 25px;  
`