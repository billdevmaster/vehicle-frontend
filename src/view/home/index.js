import React from 'react';
import { Container } from 'reactstrap';
import AddServiceWorker from "../../components/AddServiceWorker";
import AddNewVehicle from "../../components/AddNewVehicle";

const Home = () => {

  return (
    <Container>
      <AddServiceWorker />
      <AddNewVehicle />
    </Container>
  );
}

export default Home;