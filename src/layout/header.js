import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  Navbar,
  Container,
  Button,
  Collapse,
  NavItem,
  Nav,
} from 'reactstrap';
import { toast } from 'react-toastify';
import { CHAIN_ID } from '../constants/constants';

import { FaList } from "react-icons/fa";
import { HeaderStyle } from './style';

const Header = () => {
  const dispatch = useDispatch();
  const {userAddress, web3} = useSelector((state) => {
    return {
      userAddress: state.userAddress,
      web3: state.web3
    }
  })
  
  const [isOpen, setIsOpen] = useState(false);
  const [showAddress, setShowAddress] = useState("Connect Wallet");
  const toggle = () => setIsOpen(!isOpen);

  const connectWallet = async () => { 
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: `https://mainnet.infura.io/v3/${process.env.ROPSTEN_INFURA_API_KEY}`
          },
          chainId: 3
        }
      }
    };
    const web3Modal = new Web3Modal({
      network: "ropesten", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });
    
    const provider = await web3Modal.connect();
    dispatch({ type: "set", provider: provider });
    const web3 = new Web3(provider);
    dispatch({ type: "set", web3: web3 });
    await web3Modal.toggleModal();
    
    const newWeb3 = new Web3(provider);
    const accounts = await newWeb3.eth.getAccounts();
    dispatch({ type: "set", userAddress: accounts[0] });
    setShowAddress(accounts[0].substr(0, 4) + "..." + accounts[0].substr(accounts[0].length - 3, accounts[0].length));
  }

  useEffect(() => {
    const fetchData = async () => {
      if (userAddress !== '') {
        setShowAddress(userAddress.substr(0, 4) + "..." + userAddress.substr(userAddress.length - 3))
        const chainId = await web3.eth.getChainId();
        if (chainId !== CHAIN_ID) {
          toast.warning("Please switch to ETH network");
        }
      }
    }
    fetchData();
  }, [userAddress]);

  return (
    <HeaderStyle>
      <div className="main-header">
        <Container className="text-center">
          <Navbar light expand="md">
            <NavLink to="/" className="logo"><h2>Vehicle</h2></NavLink> 
          </Navbar>
          <Navbar light expand="md">
            <FaList onClick={toggle} icon="faWallet" className="text-white toggler"/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Button onClick={connectWallet}>
                      {showAddress}
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </HeaderStyle>
  );
}

export default Header;