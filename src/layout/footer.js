import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { FooterStyle } from './style';

const Footer = () => {
  return (
    <FooterStyle>
      <footer> 
        <Container>
          <p className="text-center text-white">Copyright © 2021 Krypto Gangsters. All rights reserved.</p>
        </Container>
      </footer>
    </FooterStyle>
  );
}

export default Footer;