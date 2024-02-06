import React from 'react'

import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/images/img1.avif"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.webp"
function Home() {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{minHeight:'50vh'}}>
        <h1>Find Your Next Perfect <br />Place with Ease</h1>
        <span className='ms-auto'>Sahand Estate will help you to  find your dream place in a few steps.</span><br/><br/>
        <div >
          <a className='btn btn-warning'><Link style={{textDecoration:'none' ,color:'black'}} to={'/sign-in'}>Lets Start Now...</Link></a>
        </div>
        </div>
        
        <div className="col-lg-6"></div>
      </div>
    </div>
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
    </div>
    
    </>
  )
}

export default Home
