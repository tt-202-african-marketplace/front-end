import React, { useEffect, useState } from 'react'
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
           <div className = "profile">
            <div>
                <h2>{ owner.first_name }{owner.last_name}</h2>
            </div>
            <div>
                <h4>{ owner.shop_name}</h4>
            </div>
            <div>
                <p>{ owner.email } </p>
            </div>
            </div>
            <OwnerItems/>
            <NewItem/>
        </div>
    )
}

export default Owner
