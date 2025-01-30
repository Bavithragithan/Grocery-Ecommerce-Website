import React from 'react'
import Slider from '../../components/Slider/Slider'
import { featureData } from '../../utils/data'
import { Col, Container, Row } from 'react-bootstrap'
import Categories from '../../components/Categories/Categories'


const Home = () => {
  return (
    <>
      <Slider />
      <section className='py-5'>
        <Container>
          <Row>
            {
              featureData.map((val, index) => {
                return (
                  <Col md={6} lg={3} key={index}>
                    <div className="d-flex align-items-start">
                      <div className="mb-3 ms-3">
                        <img src={val.image} className='img-fluid' alt="value.title" />
                      </div>
                      <div className="text">
                        <h3 className="sub-heading mb-1">{val.title}</h3>
                        <p className="body-text">{val.text}</p>
                      </div>

                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </section>

      <Categories />
    </>
  )
}

export default Home