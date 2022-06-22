import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { DrinkState } from "../Context/drinkContext";
import AddDrink from "./AddDrink";

const Drinks = () => {
  const [drinks, setDrinks] = useState();
  const { money, setMoney } = DrinkState();
  useEffect(() => {
    getDrinks();
  }, [drinks]);

  const getDrinks = async () => {
    try {
      const { data } = await axios.get("http://localhost:52990/api/drink");
      setDrinks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePurse = async (sum) => {
    try {
      const { data } = await axios.put(
        `http://localhost:52990/api/purse/1?count=${sum}`
      );
      setMoney(data);
    } catch (error) {
      console.log(error);
    }
  };

  const buyDrink = (p) => {
    if (p <= money.money) {
      let current = money.money - parseInt(p);
      updatePurse(current);
    } else {
      alert("You don't Have Money");
    }
  };

  return (
    <div>
      <div style={{ textAlign: "left", color: "goldenrod" }}>
        <h1>Drinks</h1>
      </div>

      <div style={{ textAlign: "right" }}>
        <AddDrink
          addDrink={(d) => {
            setDrinks([...drinks, d]);
          }}
        />
      </div>

      <Row>
        {drinks?.map((item, index) => {
          return (
            <>
              <Col style={{ paddingTop: "10px" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Name: {item.name}</Card.Title>
                    <Card.Text>Price: {item.price}</Card.Text>
                    <Button
                      onClick={() => {
                        buyDrink(item.price);
                      }}
                    >
                      Buy The Drink
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default Drinks;
