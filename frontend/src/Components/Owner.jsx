import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { Link, Route } from 'react-router-dom'
import OwnerItems from './OwnerItems'
import NewItem from './NewItem'
import axios from 'axios'


function Owner() {
    const [owner, setOwner] = useState([])
    useEffect (()=>{
        axios.get('https://tt-202-african-marketplace.herokuapp.com/api/auth/users/1' )
                .then(res => {
                    setOwner (res.data)
                    console.log('AXIOS SUCCESS: ', res);
                })
                .catch(err => {
                    console.error('There was an error registering: ', err)
                    console.log('AXIOS FAIL: values attempted: ' )
                })
    },[])

    return (
        <div>
            <h1>{ owner.first_name }{owner.last_name}</h1>
            <h3>{ owner.shop_name}</h3>
            <h4>{ owner.email } </h4>
            <NewItem/>
            {/* <Link to = "/newitem"><Button color="primary" >Add Item</Button></Link>
            <Route path="/newitem" render={() => <NewItem/>}/> */}
            <OwnerItems/>
        </div>
    )
}

export default Owner
