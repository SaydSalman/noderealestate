import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function View() {
    const handlecontact = ()=>{
        toast.info("You Have notified the landlord")
    }
  return (
   <>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:1200/1*e2R3fQIUtDYcFBa9tUDJ3Q.jpeg"
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
          src="https://miro.medium.com/v2/resize:fit:1200/1*e2R3fQIUtDYcFBa9tUDJ3Q.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-12">
                <div>
                    <h3 className='text-start'>Cottage in the Heart of Willow - $530/month</h3>
                </div>
                <div className='text-start'>
                    <span>123 Maple Lane,WillowBrook</span>
                </div>
                <div className='d-flex gap-3'>
                    <a className='btn btn-danger'>For Rent</a>
                    <a className='btn btn-success'>$ 20 Discount</a>
                </div>
                <div>
                    <h4>Description: </h4><span className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non quos fuga. Tempora, ad consectetur minus ab quaerat atque ullam fugit voluptas consequuntur odio odit nulla facere placeat dignissimos modi.</span>
                </div>
                <div className='d-grid mt-4'>
                    <a onClick={handlecontact} className='btn btn-secondary'>Contact Landlord</a>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer autoClose={2000} theme="colored"/>
   </>
  )
}

export default View
