import React from "react";
import {Form, FormControl } from "react-bootstrap";
import "../assets/styles/Busca.css";

export const Input = ({ value, classe }) => {
  return (
    <Form className={`d-flex pesquisa ${classe}`}>
      <FormControl type="search" placeholder={ value } className="me-2" aria-label="Search" />
    </Form>
  );
};
