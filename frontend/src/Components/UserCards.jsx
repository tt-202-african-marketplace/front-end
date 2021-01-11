import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = (props) => {
  const { data } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{ data.shop_name }</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ data.first_name } { data.last_name }</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;