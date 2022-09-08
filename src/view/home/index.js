import React from 'react';
import { Container } from 'reactstrap';
import AddServiceWorker from "../../components/AddServiceWorker";
import AddNewVehicle from "../../components/AddNewVehicle";
import ListVehicle from '../../components/ListVehicle';

const Home = () => {

  return (
    <Container>
      <AddServiceWorker />
      <AddNewVehicle />
      <ListVehicle />
    </Container>
  );
}

export default Home;