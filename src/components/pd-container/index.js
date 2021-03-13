import React from "react";
import { Container } from "react-bootstrap";

import PdHeader from "components/pd-header";

import "./index.scss";
import PdFooter from "components/pd-footer";

function PdContainer({ children }) {
  return (
    <Container fluid>
      <PdHeader />
      {children}
      <PdFooter></PdFooter>
    </Container>
  );
}

export default PdContainer;
