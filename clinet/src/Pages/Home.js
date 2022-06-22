import React, { useEffect, useState } from "react";
import Drinks from "../Components/Drinks";
import { DrinkState } from "../Context/drinkContext";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Purse from "../Components/Purse";

const Home = () => {
  const { money, setMoney } = DrinkState();
  useEffect(() => {
    getTheMoney();
  }, []);

  const getTheMoney = async () => {
    try {
      const { data } = await axios.get("http://localhost:52990/api/purse");
      setMoney(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <h1>Home Page</h1>
        <div style={{textAlign:'right',color:'red'}}>
          <h4>current value: {money?.money}</h4>
        </div>
        <Row>
          <Col sm={9} md={9}>
            <Drinks />
          </Col>
          <Col sm={3} md={3}>
            <Purse />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
