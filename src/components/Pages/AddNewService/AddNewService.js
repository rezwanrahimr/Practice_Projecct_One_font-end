import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddNewService = () => {
    const handleService = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const photoUrl = event.target.photoUrl.value;
        const someText = event.target.someText.value;
        const Data = {name,photoUrl,someText};
        console.log(Data);
        fetch('http://localhost:5000/service',{
            method:'POST',
            headers:{
                
                'content-type':'application/json'
            },
            body:JSON.stringify(Data)
        })
        .then(res => res.json())
        .then(data => {
            alert('Success fully added data');
        })

    }
    return (
        <div className='d-flex justify-content-center mt-5'>

<Form onSubmit={handleService}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name='photoUrl' placeholder="photoUrl" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Some Text</Form.Label>
        <Form.Control name='someText' type as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            
        </div>
    );
};

export default AddNewService;