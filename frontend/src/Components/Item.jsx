import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// handle submit axios call for submit button

const Item = (props) => {
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        }
  
    return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Item Name</Label>
        <Input type="text" name="name" id="name" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Item Price</Label>
        <Input type="text" name="price" id="price" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option value= "1">"Animal Products"</option>
          <option value= "2">Cereals</option>
          <option value= "3">Clothing and Shoes</option>
          <option value= "4">Cosmetics</option>
          <option value= "5">Fruits</option>
          <option value= "6">Seeds and Nuts</option>
          <option value= "7">Vegetables</option>
          <option value= "8">Other</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Item Description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button value= 'submit'>Submit</Button>
    </Form>
  );
}

export default Item;
