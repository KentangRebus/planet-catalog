import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";

import PdContainer from "components/pd-container";

import PlanetServices from "services/planet-services";

import "./index.scss";
import Skeleton from "react-loading-skeleton";

function PlanetDetail() {
  const [planet, setPlanet] = useState({});

  const { id } = useParams();

  useEffect(() => {
    handleGetPlanetById(id);
  }, [id]);

  async function handleGetPlanetById(id) {
    try {
      const { data } = await PlanetServices.getPlanet(id);
      setPlanet(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFormattedDate(date) {
    let d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(" / ");
  }

  return (
    <PdContainer>
      <div className='pt-5 mt-5'>
        <div>
          <Row className='justify-content-center mt-5'>
            <Col
              xs={8}
              lg={5}
              className='text-center planet-container shadow pb-4'>
              <img
                className='planet-image shadow mb-3'
                src='https://i.pinimg.com/originals/2c/c7/84/2cc784186a00d725720c4da63d97ed90.gif'
              />
              <Row className='justify-content-center'>
                <Col lg={12} className='mb-3'>
                  <h1>{planet.name || <Skeleton />}</h1>
                </Col>
                <Col lg={9} className='text-left '>
                  <Row>
                    <Col>
                      <h5>Diameter</h5>
                    </Col>
                    <Col>{planet.diameter || <Skeleton />} km</Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Gravity</h5>
                    </Col>
                    <Col>{planet.gravity || <Skeleton />}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Surface Water</h5>
                    </Col>
                    <Col>{planet.surface_water || <Skeleton />}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Population</h5>
                    </Col>
                    <Col>{planet.population || <Skeleton />}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Orbital Period</h5>
                    </Col>
                    <Col>{planet.orbital_period || <Skeleton />} days</Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Climate</h5>
                    </Col>
                    <Col>{planet.climate || <Skeleton />}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Terrain</h5>
                    </Col>
                    <Col>{planet.terrain || <Skeleton />}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Created At</h5>
                    </Col>
                    <Col>
                      {handleFormattedDate(planet.created) || <Skeleton />}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Updated At</h5>
                    </Col>
                    <Col>
                      {handleFormattedDate(planet.edited) || <Skeleton />}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </PdContainer>
  );
}

export default PlanetDetail;
