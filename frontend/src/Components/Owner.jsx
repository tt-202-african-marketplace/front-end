import React from 'react'
import { Button } from 'reactstrap'
import OwnerItems from './OwnerItems'

function Owner() {
    return (
        <div>
            <h1>Owner Full Name</h1>
            <h3>Shop name</h3>
            <h4>Location</h4>

            <Button color="primary">Add Item</Button>
            <OwnerItems/>
        </div>
    )
}

export default Owner
