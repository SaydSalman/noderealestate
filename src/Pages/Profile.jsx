import React from 'react'
import profile from "../assets/images/Sayyu pic.jpeg"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Profile() {

  
  return (
    <div style={{width:'100%',height:'100vh' }} className='bg-light'>
      <div className="row">
        <div className="col-lg-12">
          <div className='d-flex justify-content-center flex-column align-items-center'>
          <h3>Profile Pic</h3>
          <img style={{height:'80px',width:'80px'}} className='rounded-circle' src={profile}/>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='d-grid'>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </div>
      <div className='d-grid mt-3'>
        <a className='btn btn-success' href=""><Link style={{textDecoration:'none',fontFamily:'bold',color:'white'}} to={'/listing'}>Create Listing</Link></a>
      </div>
      <div className='d-flex justify-content-between'>
        <span className='mt-2 text-danger'>Delete Account</span>
        <span className='mt-2 text-danger'>Sign Out</span>
      </div>
      <div className='text-center mt-2'>
        <h5>Show Listings</h5>
      </div>
    </Form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Profile
