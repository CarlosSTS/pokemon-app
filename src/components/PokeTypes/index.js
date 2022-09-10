import React from 'react';

import {Types} from './styles';

const PokeTypes = ({types, style}) => {
  return (
    <>
      <Types style={style} type={types[0].type?.name}>
        {types[0].type.name}
      </Types>
      <Types style={style} type={types[1]?.type?.name}>
        {types[1]?.type?.name}
      </Types>
    </>
  );
};

export default PokeTypes;
