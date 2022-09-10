import React from 'react';
import {FlatList} from 'react-native';

import {Fade} from 'rn-placeholder';

import {
  Container,
  Image,
  Info,
  Input,
  Item,
  LineName,
  LineOption,
} from './styles';

export default function HomePlaceholder() {
  return (
    <Container Animation={Fade}>
      <Input />
      <FlatList
        contentContainerStyle={{marginTop: 20}}
        data={[0, 1, 2, 3, 3, 4, 5]}
        keyExtractor={() => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Item>
            <Image />
            <Info>
              <LineName />
              <LineOption />
            </Info>
          </Item>
        )}
      />
    </Container>
  );
}
