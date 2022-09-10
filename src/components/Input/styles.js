import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../common/colors';

export const Container = styled.View`
  width: 100%;
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: 1px;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.blue};
    `}
`;

export const Icon = styled(Feather)``;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`;

export const ErrorText = styled.Text`
  color: ${colors.error};
  font-size: 12px;
  font-weight: bold;
`;
