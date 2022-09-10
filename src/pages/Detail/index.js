import React, { useState, useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import { ImageSlider, ModalImage } from '../../components';
import {
  Container,
  Label,
  Name,
  Rent,
  Details,
  Description,
  PokeTypesStyles,
  StatsContainer,
  StatsButton,
  StatsText
} from './styles';
import { FlatList, Modal } from 'react-native';

const Detail = () => {
  const { pokemon } = useRoute().params;
  const [modalVisible, setModalVisible] = useState(false)

  const openCloseModal = useCallback(() => {
    setModalVisible(!modalVisible)
  }, [modalVisible]);

  return (
    <Container>
      <ImageSlider imagesUrl={pokemon.images} onPress={openCloseModal} />
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide">
        <ModalImage
          onClose={() => setModalVisible(false)}
          data={pokemon.images}
        />
      </Modal>
      <Details>
        <Description>
          <Label>Nome:</Label>
          <Name>{pokemon.name}</Name>
        </Description>

        <Rent>
          <Label>Tipo(s)</Label>
          <PokeTypesStyles types={pokemon?.types} />
        </Rent>
      </Details>

      <Details>
        <Description>
          <Label>Altura (cm):</Label>
          <Name>{pokemon.height}</Name>
        </Description>

        <Description>
          <Label>Peso (kg)</Label>
          <Name>{pokemon.weight}</Name>
        </Description>
      </Details>

      <Label style={{ paddingVertical: 20 }}>Estatística(s)</Label>
      <FlatList
        data={pokemon?.stats}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={item => item.stat.name}
        renderItem={({ item }) => {
          return (
            <StatsContainer>
              <Label> {item.stat.name}:</Label>

              <StatsButton percent={item.base_stat} type={item.stat.name}>
                <StatsText>
                  {item.base_stat}
                </StatsText>
              </StatsButton>
            </StatsContainer>

          );
        }}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={() => (
          <EmptyView icon={'pokeball'}>
            Nenhuma estatística encontrada!
          </EmptyView>
        )}
      />
    </Container>
  );
};

export default Detail;
