import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContextProvider';
import { Heading } from './Styles';

const Heloo = () => {
  const { state, setState } = useContext(GlobalContext)

  return (
    <div>
      <Heading>{state}</Heading>
    </div>
  );
};

export default Heloo;


