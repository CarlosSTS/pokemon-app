import styled from 'styled-components/native';
import { colors } from "../../common/colors";

export const ModalContainer = styled.View`
  flex: 1; 
  background-color:${colors.rgbaGrayDark} ;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColor};
  border-radius: 10px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 15px;
`;