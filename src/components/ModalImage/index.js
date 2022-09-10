import React from 'react';
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

import { ModalContainer, Container, Header, } from './styles'
import ImageSlider from '../ImageSlider';

const Modalimage = ({ onClose, data }) => {
  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 0.5 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity>
            <Feather
              onPress={onClose}
              name="x"
              color="#000"
              size={30}
            />
          </TouchableOpacity>
        </Header>
        <ImageSlider isCustom imagesUrl={data} />
      </Container>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 0.5 }}></View>
      </TouchableWithoutFeedback>
    </ModalContainer>
  )
}

export default Modalimage;