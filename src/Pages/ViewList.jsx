import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ViewList() {
  return (
    <>
        <div className='container-fluid'>
      <div className="row">
      <h1 className='text-center'>Welcome to the Real Estate!!</h1>
        <div className="col-lg-4">
          <div className='d-flex align-items-center gap-2'>
            <label htmlFor="">Search </label>
            <input type="text" className='form-control' placeholder='modern' />
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <label htmlFor="">Type: </label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Rent and Sale</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Rent </label>
            <input type="checkbox" name="" id="" />
            <label htmlFor=""> Sale</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Other</label>
          </div>
          <div className='d-flex gap-2 mt-2'>
            <label htmlFor="">Amenties: </label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Parking</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Furnished</label>
          </div>
          <div className='d-flex align-items-center gap-2'>
            <label htmlFor="">Sort: </label>
            
            <select className='form-control' name="cars" id="cars">
  <option value="volvo">Latest</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
          </div>

          <div className='mt-4 d-grid'>
            <a className='btn btn-secondary'>Search</a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-4">
            <Link style={{textDecoration:'none'}} to={'/view'}>
              <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-contemporary-house-plans-1.webp" />
        <Card.Body>
          <Card.Title>Modern Penthouse</Card.Title>
          <Card.Text>
            Location:Severe Street road,Willow Lake
          </Card.Text>
          <Button variant="primary">$:3400/month</Button>
          <div className='mt-2 d-flex justify-content-between'>
            <span>4 beds </span>
            <span> 5 Baths</span>
          </div>
        </Card.Body>
      </Card>
            </Link>
            </div>
            <div className="col-lg-4">
           <Link style={{textDecoration:'none'}} to={'/view'}>
              <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-contemporary-house-plans-1.webp" />
        <Card.Body>
          <Card.Title>Modern Penthouse</Card.Title>
          <Card.Text>
            Location:Severe Street road,Willow Lake
          </Card.Text>
          <Button variant="primary">$:3400/month</Button>
          <div className='mt-2 d-flex justify-content-between'>
            <span>4 beds </span>
            <span> 5 Baths</span>
          </div>
        </Card.Body>
      </Card>
           </Link>
            </div>
            <div className="col-lg-4">
           <Link style={{textDecoration:'none'}} to={'/view'} >
              <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-contemporary-house-plans-1.webp" />
        <Card.Body>
          <Card.Title>Modern Penthouse</Card.Title>
          <Card.Text>
            Location:Severe Street road,Willow Lake
          </Card.Text>
          <Button variant="primary">$:3400/month</Button>
          <div className='mt-2 d-flex justify-content-between'>
            <span>4 beds </span>
            <span> 5 Baths</span>
          </div>
        </Card.Body>
      </Card>
           </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ViewList
