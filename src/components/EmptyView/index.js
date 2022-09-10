import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../common/colors';

import {Container, Title} from './styles';

const EmptyView = ({children, icon}) => {
  return (
    <Container>
      <MaterialCommunityIcons
        name={icon}
        size={80}
        color={colors.placeholder}
      />
      <Title>{children}</Title>
    </Container>
  );
};

export default EmptyView;
