import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View`
  width: 12px;
  height: 12px;

  background-color: ${props => (props.active ? '#000' : '#666')};
  margin-left: 8px;
  border-radius: 6px;
`;

export const PokeImageWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: ${Dimensions.get('window').width}px;
  height: ${({isCustom}) => (isCustom ? 200 : 140)}px;
  justify-content: center;
  align-items: center;
`;

export const PokeImage = styled.Image`
  width: ${({isCustom}) => (isCustom ? 200 : 140)}px;
  height: ${({isCustom}) => (isCustom ? 200 : 140)}px;
  background-color: #dde;
  border-radius: ${({isCustom}) => (isCustom ? 100 : 70)}px;
`;
