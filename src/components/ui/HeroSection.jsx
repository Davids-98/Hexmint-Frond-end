import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import './herosection.css'
import homeImage from '../../asssets/images/homeImage.png'
import howItWorks from '../../asssets/images/Howitworks.png'

function HeroSection() {
  return (
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg='6' md='6' sm='12'>
                    <div className="hero_content">
                        <h2>Discover rare digital art and collect <span>Sell Extraordinary</span> NFTs</ h2>

                    </div>

                    <div className="hero_buttons d-flex align-items-center gap-4 mb-5">
                        <button className="btn explore_button  d-flex align-items-center gap-2">
                            <i class='ri-rocket-line'></i>
                            <Link to='/explore'>Explore</Link>
                        </button>

                        <button className="btn  create_button d-flex align-items-center gap-2">
                            <i class='ri-ball-pen-line'></i>
                            <Link to='/create'>Create</Link>
                        </button>
                    </div>
                </Col>

                <Col lg='6' md='11' s='10' xs='10' >
                    <div className="home_image w-100">
                        <img src={homeImage} alt="" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg='12' md='6' sm='12'>
                    <div className="">
                        <h1 className='text-center mt-5 mb-5 py-3'>How It Works</ h1>
                        <div className="w-100">
                        <img src={howItWorks} className='img-fluid mx-auto'alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection