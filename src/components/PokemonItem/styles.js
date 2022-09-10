import styled from 'styled-components/native';

import { colors } from '../../common/colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #dde;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  border-color: ${colors.blueLight};
  border-width: 1px;
`;

export const Image = styled.Image.attrs({
  aspectRatio: 1,
})`
  height: 42px;
  width: 42px;
  background-color: #eee;
  border-color: ${colors.blueDark};
  border-width: 1px;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  color: #333;
  font-weight: bold;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
`;

export const RemoveItemButtom = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${colors.backgroundColor};
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.blue};
  justify-content: center;
  align-items: center;
`;