import React, { useRef, useCallback, useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import _ from 'lodash';

import getValidationsErrors from '../../utils/getValidationsErrors';

import { Input, PokemonItem, EmptyView } from '../../components';

import HomePlaceholder from './components/HomePlaceholder';

import api from '../../services/api';

import { Container, List, HeaderText, HeaderTextBold } from './styles';

const Home = () => {
  const formRef = useRef(null);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPlaceholder, setLoadingPlaceholder] = useState(true);

  const handleSubmit = useCallback(
    async ({ name }) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório!'),
        });

        await schema.validate(
          { name },
          {
            abortEarly: false,
          },
        );

        const response = await api.get(name);
        const newData = {
          id: response.data.id,
          name: response.data.name,
          weight: response.data.weight,
          height: response.data.height,
          types: response.data.types,
          images: [
            response.data.sprites.front_default,
            response.data.sprites.front_shiny,
            response.data.sprites.back_default,
            response.data.sprites.back_shiny,
          ],
          stats: _.orderBy(
            response.data.stats.map(stat => stat),
            'base_stat',
          ),
        };
        pokemons.find(pokemon => pokemon.name === newData.name)
          ? formRef.current?.setFieldError('name', 'Pokémon já cadastrado!')
          : setPokemons(state => [...state, newData]);
        await AsyncStorage.setItem(
          'pokemons',
          JSON.stringify([...pokemons, newData]),
        );
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        if (err.response.status === 404) {
          formRef.current?.setFieldError('name', 'Pokémon não encontrado!');
          return;
        }
      } finally {
        setLoading(false);
        formRef.current?.setFieldValue('name', '');
      }
    },
    [pokemons],
  );

  const deleteItem = useCallback(async (item) => {
    Alert.alert(
      "Deletar pokémon",
      `Deseja realmente deletar ${item.name} da sua lista ?`,
      [
        {
          style: "cancel",
          text: "Não",
          onPress: () => {}
        },
        {
          style: "default",
          text: "Sim",
          onPress: async () => {
            const newPokemons = pokemons.filter((pokemon) => {
              return item.id !== pokemon.id;
            });
            await AsyncStorage.setItem('pokemons', JSON.stringify(newPokemons));
            setPokemons(newPokemons);
          }
        },
      ], { cancelable: false })
  }, [pokemons]);

  useEffect(() => {
    async function loadStoragedData() {
      const pokemonsStorage = await AsyncStorage.getItem('pokemons');
      if (pokemonsStorage) {
        setPokemons(JSON.parse(pokemonsStorage));
      }
      setLoadingPlaceholder(false);
    }
    loadStoragedData();
  }, []);

  const pokemonSize = useMemo(() => _.get(pokemons, 'length', 0), [pokemons]);
  
  if (loadingPlaceholder) {
    return <HomePlaceholder />;
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          loading={loading}
          editable={!loading}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="name"
          icon="plus-circle"
          placeholder="Nome ou número da pokédex"
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />
      </Form>
      <HeaderText>
        Total de
        <HeaderTextBold> {pokemonSize} pokémons</HeaderTextBold>.
      </HeaderText>
      <List
        contentContainerStyle={{ flexGrow: 1 }}
        data={_.orderBy(pokemons, 'id')}
        keyExtractor={item => String(item.id)}
        onEndReached={() => { }}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <PokemonItem
            item={item}
            onPress={() => deleteItem(item)}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyView icon={'pokeball'}>Nenhum pokémon cadastrado.</EmptyView>
        )}
      />
    </Container>
  );
};

export default Home;
