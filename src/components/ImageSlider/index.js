import React, { useState, useRef } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  PokeImageWrapper,
  PokeImage,
} from './styles';

const ImageSlider = ({ imagesUrl, onPress, isCustom }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef(info => {
    const index = info.viewableItems[0].index;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>
      <FlatList
        data={imagesUrl}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={key => key}
        onViewableItemsChanged={indexChanged?.current}
        renderItem={({ item }) => (
          <PokeImageWrapper
            isCustom={isCustom}
            onPress={onPress}>
            <PokeImage
              isCustom={isCustom}
              source={{ uri: item }}
              resizeMode="contain"
            />
          </PokeImageWrapper>
        )}
      />
    </Container>
  );
};

export default ImageSlider;
