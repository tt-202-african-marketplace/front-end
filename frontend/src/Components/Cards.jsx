import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './Kyles.css'


const Cards = (props) => {
  const { data } = props;
  return (
    <div className= "none">
    <div className= "column">
      
        <Card className = "card" >
          <CardBody>
            <CardTitle tag="h4">{ data.item_name }</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{ data.category }</CardSubtitle>
            <CardText tag="h6" >{ data.price }</CardText>
            <CardText tag="h6">{ data.description}</CardText>
            </CardBody>
        </Card>
      
    </div>
    </div>
  );
};

export default Cards;