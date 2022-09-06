import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Banner1 from '../../../assets/images/banner1.jpeg';
import Gangster1 from '../../../assets/images/gangster1.jpeg';
import Gangster2 from '../../../assets/images/gangster2.jpeg';
import Gangster3 from '../../../assets/images/gangster3.jpeg';
import Handgun from '../../../assets/images/Handgun.png';
import {GangstersStyle} from '../../../style';

const Gangsters = () => {
  return (
    <>
    <GangstersStyle>
      <section style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 18, 44, 0.89), rgba(9, 18, 44, 0.89)), url(${Banner1})` }}>
        <h1 className="title text-white">
          <img src={Handgun} />
          Featured gangsters
        </h1>
        <Row>
          <Col md={4} className="text-center">
            <img src={Gangster1} />
          </Col>
          <Col md={4} className="text-center">
            <img src={Gangster2} />
          </Col>
          <Col md={4} className="text-center">
            <img src={Gangster3} />
          </Col>
        </Row>
      </section>
    </GangstersStyle>
    </>
  )
}

export default Gangsters;