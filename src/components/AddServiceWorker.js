import React, { useState } from 'react';
import { Row, Col, Input, Button, Card, CardBody, CardHeader } from 'reactstrap';
import { useSelector } from 'react-redux';
import Web3 from 'web3';
import { ContractAddr, ContractAbi } from '../constants/contract';
import {toast} from 'react-toastify';

const AddServiceWorker = () => {
  const {web3, userAddress} = useSelector(state => {
    return {
      web3: state.web3,
      userAddress: state.userAddress,
    }
  });
  const [account, setAccount] = useState("");

  const addServiceWorker = async () => {
    if (!userAddress) {
      toast.warning(`Vehicle: Please connect wallet`);
      return;
    }
    if (!Web3.utils.isAddress(account)) {
      toast.warning(`Vehicle: Please input valid address`);
      return;
    }

    const contract = new web3.eth.Contract(
      ContractAbi,
      ContractAddr
    );

    try {
      const buyStatus = await contract.methods.setServiceWorker(account).send({from: userAddress});
      if (buyStatus.status) {
        toast("Vehicle: Added New Service Worker Successfully");
      }
    } catch (e) {
      toast.error(e.message)
      console.log(e)
    }
  }

  return (
    <>
      <Card className='mt-5'>
        <CardHeader>
          <h3 className='text-white'>Add New Service Worker</h3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={6}>
              <Input value={account} onChange={e => setAccount(e.target.value)} />
            </Col>

            <Col md={6}>
              <Button onClick={addServiceWorker} color="info">Add New Service Worker</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}

export default AddServiceWorker;