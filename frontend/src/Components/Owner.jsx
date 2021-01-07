import React from 'react'
import { Button } from 'reactstrap'
import Card from './Cards'
import Cards from './Cards'

function Owner() {
    return (
        <div>
            <h1>Owner Full Name</h1>
            <h3>Shop name</h3>
            <h4>Location</h4>

            <Button color="primary">Add Item</Button>
<Cards/>
        </div>
    )
}

export default Owner
