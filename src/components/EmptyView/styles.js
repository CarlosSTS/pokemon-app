import styled from 'styled-components/native';
import {colors} from '../../common/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.transparent};
`;

export const Title = styled.Text`
  color: ${colors.placeholder};
  font-size: 20px;
  margin: 20px;
  font-weight: bold;
`;
