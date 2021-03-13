import React, { useEffect, useState } from "react";

import PlanetService from "services/planet-services";
import PdContainer from "components/pd-container";
import { Card, Col, Row, Carousel } from "react-bootstrap";

import "./index.scss";
import Skeleton from "react-loading-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory, useLocation } from "react-router";

function Home() {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const history = useHistory();
  const location = useLocation();

  const imgList = [
    "https://cdn.dribbble.com/users/4000493/screenshots/7029677/image.png",
    "https://cdn.dribbble.com/users/1004185/screenshots/14773268/media/6a644097c120190f8f7e0b445eee08aa.jpg?compress=1&resize=1600x1200",
    "https://cdn.dribbble.com/users/217504/screenshots/8739171/image.png",
    "https://cdn.dribbble.com/users/2338068/screenshots/4681061/planet-zepo5.png",
  ];

  const carouselItem = [
    {
      src:
        "https://cdn.dribbble.com/users/902228/screenshots/9937393/media/1269bd7ed29960b88205714e5a3f411d.jpg?compress=1&resize=1600x1200",
      title: "Find Your Planet",
      desc:
        "A planet is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity",
    },
    {
      src:
        "https://cdn.dribbble.com/users/1823850/screenshots/5293988/planet.jpg",
      title: "Discover New Ones",
      desc:
        "A planet is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity",
    },
    {
      src:
        "https://cdn.dribbble.com/users/1018473/screenshots/3925352/galaxy-01.jpg?compress=1&resize=800x600",
      title: "Try To Learn One",
      desc:
        "A planet is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity",
    },
  ];

  useEffect(() => {
    window.scroll(0, 0);
    setPlanets([]);
    if (!location.search) getPlanets();
  }, []);

  useEffect(() => {
    setPlanets([]);
    getPlanets(location.search.split("=")[1], 1);
  }, [location.search]);

  async function getPlanets(search = "", page = 1) {
    try {
      const { data } = await PlanetService.getPlanets(search, page);
      setPlanets((prev) => [...prev, ...data.results]);
      setPage(page + 1);
      console.log(data);
      data.next === null && setHasMore(false);
    } catch (error) {
      console.error(error);
    }
  }

  function fetchNextData() {
    getPlanets("", page);
  }

  function handlePlanetId(url) {
    let id = 0;
    id = url.split("/")[5];

    history.push(`/planet/${id}`);
  }

  return (
    <PdContainer>
      <Carousel>
        {carouselItem.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img
              className='d-block w-100 carousel-img'
              src={item.src}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h3 className='text-center my-5'>Planet Catalog</h3>
      <InfiniteScroll
        style={{ overflowX: "hidden" }}
        dataLength={planets.length} //This is important field to render the next data
        next={fetchNextData}
        loader={<h4 className='text-center'>Loading...</h4>}
        hasMore={hasMore}>
        <Row className='px-5'>
          {planets.length === 0 ? (
            <>
              <Col xs={4} lg={2} className='mb-4'>
                <Card className='shadow-sm'>
                  <Card.Body>
                    <Skeleton height={100} />
                    <Card.Title>
                      <Skeleton />
                    </Card.Title>
                    <Card.Text className='font-sm'>
                      <Skeleton count={2} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} lg={2} className='mb-4'>
                <Card className='shadow-sm'>
                  <Card.Body>
                    <Skeleton height={100} />
                    <Card.Title>
                      <Skeleton />
                    </Card.Title>
                    <Card.Text className='font-sm'>
                      <Skeleton count={2} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} lg={2} className='mb-4'>
                <Card className='shadow-sm'>
                  <Card.Body>
                    <Skeleton height={100} />
                    <Card.Title>
                      <Skeleton />
                    </Card.Title>
                    <Card.Text className='font-sm'>
                      <Skeleton count={2} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} lg={2} className='mb-4'>
                <Card className='shadow-sm'>
                  <Card.Body>
                    <Skeleton height={100} />
                    <Card.Title>
                      <Skeleton />
                    </Card.Title>
                    <Card.Text className='font-sm'>
                      <Skeleton count={2} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} lg={2} className='mb-4'>
                <Card className='shadow-sm'>
                  <Card.Body>
                    <Skeleton height={100} />
                    <Card.Title>
                      <Skeleton />
                    </Card.Title>
                    <Card.Text className='font-sm'>
                      <Skeleton count={2} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} lg={2} className='mb-4'>
                <Card className='shadow-sm'>
                  <Card.Body>
                    <Skeleton height={100} />
                    <Card.Title>
                      <Skeleton />
                    </Card.Title>
                    <Card.Text className='font-sm'>
                      <Skeleton count={2} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ) : (
            planets.map((planet, idx) => (
              <Col xs={6} lg={2} key={idx} className='mb-4'>
                <Card
                  className='shadow-sm'
                  onClick={handlePlanetId.bind(this, planet.url)}>
                  <Card.Img variant='top' src={imgList[idx % 4]} />
                  <Card.Body>
                    <Card.Title className='text-center'>
                      {planet.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </InfiniteScroll>
    </PdContainer>
  );
}

export default Home;
