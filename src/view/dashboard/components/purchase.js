import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Input, Button } from "reactstrap";
import Web3 from 'web3';
import { FaTwitter, FaTelegram, FaInstagram, FaDiscord } from "react-icons/fa";
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import {toast} from 'react-toastify';
import { ContractAddr, ContractAbi } from '../../../constants/contract';
import { CHAIN_ID } from '../../../constants/constants';

import { PurchaseStyle } from '../../../style';
import BlackBrike from '../../../assets/images/black-brike.jpg';
import RedLogo from '../../../assets/images/logo-red.png';
import KGImage from '../../../assets/images/KG.svg';
import OpenseaIcon from '../../../assets/images/opensea-icon.png';
import MintAvatar from '../../../assets/images/KG2.png';
import Revolver from '../../../assets/images/Revolver.png';
import Mask from '../../../assets/images/mask.png';

const Introduction = () => {
  const dispatch = useDispatch();
  const userAddress = useSelector(state => state.userAddress);
  const web3 = useSelector(state => state.web3);
  const [amount, setAmount] = useState(0);
  const [remainAmount, setRemainAmount] = useState(10000);

  const purchase = async () => {
    let gas = 178000;
    if (userAddress === '') {
      toast.warning(`please connect wallet.`);
      return;
    }
    if (amount === 0) {
      toast.warning(`please input amount.`);
      return;
    }
    if (amount * 1 > 20) {
      toast.warning(`Not allowed more than 20.`);
      return;
    }
    const chainId = await web3.eth.getChainId();
    if (chainId !== CHAIN_ID) {
      return toast.warning("Please switch to ETH network");
    }
    const contract = new web3.eth.Contract(
      ContractAbi,
      ContractAddr
    );
    var isWhiteListed = await contract.methods.isWhiteListed(userAddress).call();
    gas = gas + (amount - 1) * 50000;
    let value = 0;
    if (isWhiteListed) {
      value = amount * 0.08;
    } else {
      value = amount * 0.08;
    }
    const buyStatus = await contract.methods.createItem(amount).send({from: userAddress, value: Web3.utils.toWei((value).toString(), 'ether'), gas: gas});
    console.log(buyStatus);
  }

  useEffect(async () => {
    if (userAddress === '') {
      return;
    }
    if (web3 !== {}) {
      const chainId = await web3.eth.getChainId();
      if (chainId !== CHAIN_ID) {
        toast.warning("Please switch to ETH network");
      }

      const contract = new web3.eth.Contract(
        ContractAbi,
        ContractAddr
      );
      const countNFTs = await contract.methods._tokenIDs().call();
      setRemainAmount(10000 - countNFTs * 1);
    }
  }, [userAddress])

  return (
    <>
    <section style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${BlackBrike})` }}>
      <PurchaseStyle>
        <Container>
          <Row className="image">
            <Col md={6} className="text-center left-panel">
              <img src={RedLogo} />
            </Col>
            <Col md={6} className="right-panel">
              <h1>10,000</h1>
              <h2>UNIQUE GANGSTERS</h2>
            </Col>
          </Row>
          <Row className="introduction">
            <Col md={6} className="right-panel">
              <h3 className="text-red">100% UNIQUE</h3>
              <p className="text-white">
              All 10,000 Krypto Gangsters are Unique. There is no one like another. Each Gangster is randomly generated with it's own characteristics, expressions and attributes.
              </p>
              <h3 className="text-red">KRYPTOGANGSTERS SECRET</h3>
              <p className="text-white">
              The KG collection is a ‘cryptonized”  artistic representation of real world and fictional characters that are known gangsters. Each NFT  has unique attributes designed by our artists.
              </p>
            </Col>
            <Col md={6} className="left-panel">
              <ul>
                <li>
                  <a href="https://www.instagram.com/kryptogangsters/" target="_blink">
                    <span className="text-red">Instagram</span>
                    <FaInstagram icon={faWallet} className="text-white"/>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kryptogangsters" target="_blink">
                    <span className="text-red">Twitter</span>
                    <FaTwitter icon={faWallet} className="text-white"/>
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/invite/kryptogangsters" target="_blink">
                    <span className="text-red">Discord</span>
                    <FaDiscord icon={faWallet} className="text-white"/>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/KryptoGangsters" target="_blink">
                    <span className="text-red">Telegram</span>
                    <FaTelegram icon={faWallet} className="text-white"/>
                  </a>
                </li>
                <li>
                  <a href="https://opensea.io/collection/krypto-gangsters" target="_blink">
                    <span className="text-red">Opensea</span>
                    <img src={OpenseaIcon} className="opensea-icon"/>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          
          <Row className="purchase">
            <Col md={6} className="left-panel">
              <h1 className="text-white">
                Join<br/> the<br/>
                <span className="text-red">K</span>rypto<br/> <span className="text-red">G</span>ang<br/>
              </h1>
            </Col>
            <Col md={6} className="right-panel">
              <div>
                <h3 className="text-white">Mint Your Gangster<img src={KGImage}/></h3>
                <h3 className="text-white">{userAddress === '' ? 'Please connect your wallet': `Your address is ${userAddress.substr(0, 3) + '...' + userAddress.substr(userAddress.length - 3)}`} </h3>
                <Row>
                  <Col xs={5} className="text-center left-panel">
                    <img src={MintAvatar}/>
                    <h4 className="text-white">Quantity</h4>
                  </Col>
                  <Col xs={7} className="text-right right-panel">
                    <h4 className="text-white">Price Per Gangster</h4>
                    <h4 className="text-white">0.08 ETH EACH</h4>
                    <h4 className="text-white" style={{ fontSize: 13 }}>{userAddress !== '' ? `${remainAmount} remaining` : `Connect your wallet to see the available amount`}</h4>
                    <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                  </Col>
                </Row>
                <Button className="purchase-btn" onClick={purchase}>Purchase NFT</Button>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <Row className="description"id="nft">
          <h1 className="title text-white"><img src={Revolver} />NFT</h1>
          <Col md={8}>
            <h3 className="text-white">
            We will launch 2 sets of collectible NFTs. One set are “cryptonised” versions of real world and fictional characters that in one way or another are known to be “gangsters”. Every NFT will be unique and only one per NFT will be available. The characters are designed by our team and all have unique attributes attached to them.<br/><br/>

            The second set of collectibles will be minted in one 10,000 NFT strong set of collectibles. These NFTs will be minted using an artificial intelligence process that will use and combine a set of attributes designed by our team.
            </h3>
          </Col>
          <Col md={4}>
            <img src={Mask} />
          </Col>
        </Row> */}
      </PurchaseStyle>
    </section>
  </>      
  );
}

export default Introduction