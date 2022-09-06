import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { KilocoinStyle } from '../../../style';

import BlackBrike from '../../../assets/images/black-brike.jpg';
import SMG from '../../../assets/images/SMG.png';
import KGCoin from '../../../assets/images/KG-coin.png';

const Kilocoin = () => {
  return (
    <>
      <KilocoinStyle>
        <section style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 18, 44, 0.89), rgba(9, 18, 44, 0.89)), url(${BlackBrike})` }} id="kilocoin">
          <h1 className="title text-white">
            <img src={SMG} />
            Kryptogangsters is more than a NFT.
          </h1>
          <Row>
            <Col md={5} className="text-center">
              <img src={KGCoin} />
            </Col>
            <Col md={7}>
              <h3 className="text-white">
              It is an ecosystem.<br/><br/>

              KryptoGangsters ecosystem includes $KILO coin, an ERC20 token. <br/><br/>

              Every holder of Kryptogangsters NFT will receive a 5k $Kilo on airdrop.<br/><br/>

              </h3><br/><br/>
              <h3 className="text-white">
              $Kilo will be used for voting, payouts & ecosystem in general.
              </h3><br/><br/>
              <h3 className="text-white"><span className="text-red">Name: </span>Kilo</h3>
              <h3 className="text-white"><span className="text-red">Symbol: </span>$Kilo</h3>
              <h3 className="text-white"><span className="text-red">Decimals: </span>9</h3>
              <h3 className="text-white"><span className="text-red">Address: </span>0xaEF396c1FF27b1D5313A8ca02948E83f5f7A9fa0</h3><br/><br/>
              <h3 className="text-white"><span className="text-red">Tax: </span>10% total</h3>
              <h3 className="text-white">4% Holder Reward</h3>
              <h3 className="text-white">2% Burn</h3>
              <h3 className="text-white">2% Charity</h3>
              <h3 className="text-white">2% Marketing</h3>
              <h3 className="text-white">Total Supply <span className="text-red">250,000,000 pre-minted</span></h3>
              <div className="text-center">
                <a className="default-btn" href="https://t.me/KryptoGangsters" target="_blink">
                  JOIN THE PRIVATE SALE
                </a>
              </div>
            </Col>
          </Row>
        </section>
      </KilocoinStyle>
    </>
  );
}

export default Kilocoin;