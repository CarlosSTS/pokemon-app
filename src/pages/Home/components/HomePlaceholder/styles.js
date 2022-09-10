import styled from 'styled-components/native';
import {colors} from '../../../../common/colors';

import {Placeholder, PlaceholderMedia, PlaceholderLine} from 'rn-placeholder';

export const Container = styled(Placeholder)`
  flex: 1;
  padding: 20px;
  background-color: ${colors.backgroundColor};
`;

export const Image = styled(PlaceholderMedia)`
  height: 42px;
  width: 42px;
  background-color: ${colors.primaryColorTable};
`;

export const Input = styled(PlaceholderLine)`
  width: 100%;
  padding: 0 15px;
  height: 46px;
  background-color: ${colors.gray};
  border-radius: 4px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Item = styled.View`
  background-color: ${colors.gray};
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  border-color: ${colors.primaryColorTable};
  border-width: 1px;
`;

export const Info = styled.View`
  top: 8px;
  margin-left: 10px;
  flex: 1;
`;

export const LineName = styled(PlaceholderLine)`
  background-color: ${colors.primaryColorTable};
  width: 80px;
  height: 12px;
`;

export const LineOption = styled(PlaceholderLine)`
  background-color: ${colors.primaryColorTable};
  width: 100px;
  height: 24px;
`;
