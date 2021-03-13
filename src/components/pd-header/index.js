import React, { useState } from "react";
import { Form, FormControl, Navbar, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

function PdHeader() {
  const [query, setQuery] = useState("");

  const history = useHistory();

  function handleSearchPlanet(e) {
    e.preventDefault();
    history.push(`/?search=${query}`);
  }

  function handleSearchQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <Navbar expand='lg shadow'>
      <Row className='w-100'>
        <Col xs={12} lg={3} className='text-center'>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src='https://lh3.googleusercontent.com/pw/ACtC-3fYjjgr20JUwNxDHAS0i6aobhLk-CtILwgiJVsK7bn5-5GnXL5VV4n-yuhuVblF-awXa0H4G59AWNzbSKT1n4OLaP5EBVe3Rfzbouc1ITbry_sAURelJWn7dCQBKZiNi52kzeAjVg_55OMs2cLx_HX1=w240-h245-no?authuser=0'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{" "}
            Milkyway
          </Navbar.Brand>
        </Col>
        <Col xs={12} lg={{ span: 4, offset: 1 }} className='text-center'>
          <Form inline onSubmit={handleSearchPlanet}>
            <FormControl
              type='text'
              placeholder='Find a Planet'
              className='mr-sm-2 w-100'
              onChange={handleSearchQuery}
            />
          </Form>
        </Col>
      </Row>
    </Navbar>
  );
}

export default PdHeader;
