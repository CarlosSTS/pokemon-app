import React, { useCallback, useMemo } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../assets/estrela.png';
import PokeTypes from '../PokeTypes';

import {
  Container,
  Info,
  Title,
  Image,
  TypesContainer,
  RemoveItemButtom
} from './styles';
import { colors } from '../../common/colors';

const PokemonItem = ({ item,onPress }) => {
  const { navigate } = useNavigation();

  const image = useMemo(
    () => (item?.images ? { uri: item.images[0] } : Icon),
    [item],
  );
  const navigateToDetail = useCallback(
    item => {
      navigate('Detail', { pokemon: item });
    },
    [navigate],
  );

  return (
    <Container onPress={() => navigateToDetail(item)}>
      <>
        <Image source={image} />
        <Info>
          <Title>{item?.name || 'Sem registro'}</Title>
          <TypesContainer>
            <PokeTypes types={item?.types} />
          </TypesContainer>
        </Info>
        <RemoveItemButtom onPress={onPress}>
          <Entypo
            name="trash"
            size={24}
            color={colors.error}
          />
        </RemoveItemButtom>
      </>
    </Container>
  );
};

export default PokemonItem;
