import React from "react";
import { Container } from "react-bootstrap";

import Header from "components/pd-header";

import "./index.scss";

function PdContainer({ children }) {
  return (
    <Container fluid>
      <Header />
      {children}
    </Container>
  );
}

export default PdContainer;
