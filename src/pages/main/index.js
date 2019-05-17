import React, { Fragment } from 'react';
import Map from '../../components/Map';
import AddDeveloper from '../../components/AddDeveloper';
import ListDeveloper from '../../components/ListDevelopers';

const Main = () => (
  <Fragment>
    <Map />
    <AddDeveloper />
    <ListDeveloper />
  </Fragment>
);

export default Main;
