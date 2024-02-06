import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
         <div style={{width:'100%',height:'100vh'}} className="d-flex justify-content-center align-items-center">
      <div style={{width:'900px',height:'550px'}} className="card shadow border rounded p-5 mt-5 ">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className=" card shadow rounded p-2 border bg-light " style={{height:'420px'}}>
                        <img style={{height:'300px'}} className="img-fluid" src="https://i.pinimg.com/originals/fd/e1/0f/fde10f0a706b219627dfcd34a6a1c939.gif" alt="" />
                        <h3 className="text-center mt-2 text-warning">Be Verified</h3>
                        <h5 className="text-center text-info">Join Experienced Designers in this Platform</h5>
                    </div>
                </div>
                <div className="col-lg-6">
                   <Form>
                   <div><h3 style={{textAlign:'justify'}}>
                    Hello,
                   </h3>
                   <h4 style={{textAlign:'justify'}}>Welcome to Our Real Estate Market</h4></div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <div className="text-center d-grid mt-4">
        
          
            
              <a className='btn btn-secondary'><Link style={{textDecoration:'none',color:'black'}} to={'/sign-in'}>Sign Up</Link></a>
            
          
        
      </div>
      <div className="text-center d-grid mt-4">
        <Button variant="secondary" type="submit">
          Sign In With Google
        </Button>
      </div>
      
    </Form>
    <div className="d-flex gap-2">
      <h5> Have an Account?</h5> <a className="text-white" ><Link to={'/sign-in'}>Sign In</Link></a>
    </div>
                </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default SignUp
