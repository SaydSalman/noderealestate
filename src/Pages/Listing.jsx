import React from 'react'
import Form from 'react-bootstrap/Form';
function Listing() {
  return (
    <div className='container'>
        <div className='row'>
        
            <h1 className='text-center'>Create a Listing</h1>
            <div className="col-lg-6">
            <div className='container-fluid'>
                <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="Name" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control placeholder='Description' as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Address" />
              </Form.Group>
             <div className='d-flex justify-content-between'>
             <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        Sell
      </label>
    </div>
             <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        Rent
      </label>
    </div>
             <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        Parking spot
      </label>
    </div>
             <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Furnished
      </label>
    </div>
             <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Offer
      </label>
    </div>
    
    
             </div>
             <div className='d-flex justify-content-between'>
                <div className='d-flex gap-2 align-items-center'>
                    <input style={{width:'50px',height:'30px'}} type="text" className='form-control' placeholder='1' />
                    <label htmlFor="Beds">Beds</label>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <input style={{width:'50px',height:'30px'}} type="text" className='form-control' placeholder='1' />
                    <label htmlFor="Beds">Baths</label>
                </div>
             </div>
             <div className='mt-2'>
                <input type="text" className='form-control' />
                <label htmlFor="">Regular Price</label>
             </div>
            </Form>
            </div>
            </div>
            <div className="col-lg-6">
            <h4>Images: <span>The first image will be the cover (max 6)</span></h4>
            <div className='d-flex gap-2'>
                <div>
                
                <input type="file" style={{width:'300px',border:'1px solid'}} />
            </div>
            <div>
                <a className='btn btn-success'>Upload</a>
            </div>
            </div>
            <div className='d-grid mt-3'>
                <a className='btn btn-primary'>Create Listing</a>
            </div>
            </div>
        
          
        </div>
    </div>
  )
}

export default Listing
