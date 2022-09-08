import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardBody, Input, Row, Col, Button } from 'reactstrap';
import { ContractAddr, ContractAbi } from '../constants/contract';

const ListVehicle = () => {
	const {web3, userAddress} = useSelector(state => {
    return {
      web3: state.web3,
      userAddress: state.userAddress,
    }
  });
	const [keyword, setKeyword] = useState("");
	const [data, setData] = useState({
		name: "",
		make: "",
		model: "",
		color: "",
	});

	const searchVehicle = async () => {
		if (keyword.trim() === "") {
			toast.warning("Vehicle: Please input valid VIN number");
			return;
		}
		if (!userAddress) {
      toast.warning(`Vehicle: Please connect wallet`);
      return;
    }
		const contract = new web3.eth.Contract(
      ContractAbi,
      ContractAddr
    );
		const index = await contract.methods.VINToVehicle(keyword).call();
		if (index === 0) {
			toast.warning("Vehicle: This VIN is not registered");
			return;
		}
		const vehicle = await contract.methods.vehicles(index).call();
		setData({name: vehicle.name, make: vehicle.make, model: vehicle.model, color: vehicle.color});
	}
	return (
		<>
			<Card className='mt-5'>
        <CardHeader>
          <h3 className='text-white'>Explorer Vehicle</h3>
        </CardHeader>
        <CardBody>
					<Row>
						<Col md={6}>
		          <Input value={keyword} onChange={e => {setKeyword(e.target.value)}} placeholder="Input VIN"/>
						</Col>
						<Col md={6}>
							<Button color="info" onClick={searchVehicle}>Search</Button>
						</Col>
					</Row>
					<Row className="mt-2">
						<Col md={12}>
							<p>Name: {data.name}</p>
							<p>Make: {data.make}</p>
							<p>Model: {data.model}</p>
							<p>Color: {data.color}</p>
						</Col>
					</Row>
        </CardBody>
      </Card>
		</>
	)
}

export default ListVehicle;