import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Input, Button, Card, CardBody, CardHeader, FormGroup, Label } from 'reactstrap';
import { toast } from 'react-toastify';
import { ContractAddr, ContractAbi } from '../constants/contract';

const AddNewVehicle = () => {
  const {web3, userAddress} = useSelector(state => {
    return {
      web3: state.web3,
      userAddress: state.userAddress,
    }
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    VIN: "",
    name: "",
    make: "",
    model: "",
    color: "",
  });

  const addNewVehicle = async () => {
    if (!userAddress) {
      toast.warning(`Vehicle: Please connect wallet`);
      return;
    }

    if (data.VIN.trim() === '' || data.name.trim() === '' || data.make.trim() === '' || data.model.trim() === '' || data.color.trim() === '') {
      toast.warning(`Vehicle: Please fill inputs correctly`);
      return;
    }

    const contract = new web3.eth.Contract(
      ContractAbi,
      ContractAddr
    );
    setLoading(true)

    try {
      const buyStatus = await contract.methods.addVehicle(data.VIN, data.name, data.make, data.model, data.color).send({from: userAddress});
      if (buyStatus.status) {
        setLoading(false)
        toast("Vehicle: Added New Vehicle Successfully");
      }
    } catch (e) {
      toast.error(e.message)
      setLoading(false)
    }
  }

	return (
		<>
			<Card className='mt-5'>
        <CardHeader>
          <h3 className='text-white'>Add New Vehicle</h3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="vin">
                  * VIN
                </Label>
                <Input
                  id="vin"
                  name="vin"
                  value={data.VIN}
                  onChange={e => {
                    setData({...data, VIN: e.target.value});
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">
                  * Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={e => {
                    setData({...data, name: e.target.value});
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="make">
                  * Make
                </Label>
                <Input
                  id="make"
                  name="make"
                  value={data.make}
                  onChange={e => {
                    setData({...data, make: e.target.value});
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="model">
                  * Model
                </Label>
                <Input
                  id="model"
                  name="model"
                  value={data.model}
                  onChange={e => {
                    setData({...data, model: e.target.value});
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="color">
                  * Color
                </Label>
                <Input
                  id="color"
                  name="color"
                  value={data.color}
                  onChange={e => {
                    setData({...data, color: e.target.value});
                  }}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <Button onClick={addNewVehicle} className="mt-4" color="info">
                {loading ? `Adding...` : `Add New Vehicle`}
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
		</>
	)
}

export default AddNewVehicle;