import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";

const Calc = (props) => {
  return (
    <Form className="form">
      <FormGroup row>
        <Label for="totalBills" sm={2}>
          Total Bills
        </Label>
        <Col sm={10}>
          <Input
            type="number"
            name="totalBills"
            id="totalBills"
            placeholder="Enter your total bills"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}></Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}></Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}></Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}></Label>
        <Col sm={10}>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Calc;
