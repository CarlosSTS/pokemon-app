import styled from 'styled-components/native';

import {colors} from '../../common/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${colors.backgroundColor};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const HeaderText = styled.Text`
  align-self: flex-end;
  font-size: 15px;
  color: #737380;
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;
