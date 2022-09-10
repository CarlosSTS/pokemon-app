import styled from 'styled-components/native';
import {colors} from '../../common/colors';

export const Types = styled.Text`
  font-size: 13px;
  margin-top: 4px;
  color: #fff;
  font-weight: bold;
  background-color: ${({type}) => (type ? colors[type] : colors.default)};
  padding: 4px;
  text-transform: capitalize;
`;
