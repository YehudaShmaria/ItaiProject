import React, { useEffect, useState } from "react";
import { DrinkState } from "../Context/drinkContext";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Purse = () => {
  const { money, setMoney } = DrinkState();
  const [purse, setPurse] = useState();
  const [addPurse, setAddPurse] = useState(0);
  const [pullPurse, setpullPurse] = useState(0);
  useEffect(() => {
    if (money) {
      setPurse(money.money);
    }
  }, [money]);

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

  const addMoney = () => {
    let current = money.money + parseInt(addPurse);
    updatePurse(current);
  };

  const pullMoney = () => {
    if (pullPurse <= money.money) {
      let current = money.money - parseInt(pullPurse);
      updatePurse(current);
    } else {
      alert("The Number is to Big");
      setpullPurse(0);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "left", color: "goldenrod" }}>
        <h1>Purse</h1>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Form style={{ textAlign: "left" }}>
          <Form.Group className="mb-3">
            <Form.Label>Add Money</Form.Label>
            <Form.Control
              value={addPurse}
              type="number"
              onChange={(e) => {
                setAddPurse(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <div style={{ textAlign: "right" }}>
          <Button variant="warning" onClick={addMoney}>
            Update
          </Button>
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Form style={{ textAlign: "left" }}>
          <Form.Group className="mb-3">
            <Form.Label>Pull Money</Form.Label>
            <Form.Control
              value={pullPurse}
              type="number"
              onChange={(e) => {
                setpullPurse(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <div style={{ textAlign: "right" }}>
          <Button variant="warning" onClick={pullMoney}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Purse;
