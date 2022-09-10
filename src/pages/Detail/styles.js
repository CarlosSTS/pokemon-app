import styled from 'styled-components/native';
import { colors } from '../../common/colors';
import { PokeTypes } from '../../components';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColor};
  padding: 20px;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Label = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  width: 100%;
  font-size: 16px;
  margin-top: 4px;
  color: #fff;
  font-weight: bold;
  background-color: #999;
  padding: 8px;
  text-align: center;
  text-transform: capitalize;
`;

export const Rent = styled.View``;

export const PokeTypesStyles = styled(PokeTypes)`
  font-size: 16px;
  padding: 8px;
`;

export const StatsContainer = styled.View`
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
`;

export const StatsButton = styled.View`
  background-color: ${({ type }) => (type ? colors[type] : colors.default)};
  width: ${({ percent }) => (percent >= 52 ? 52 : percent <= 20 ? 16 : percent)}%;
  height: 46px;
  border-radius: 4px;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
`;

export const StatsText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;
