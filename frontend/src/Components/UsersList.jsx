import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCards from './UserCards'
function UsersList() {
    const [user, setUser] = useState([])
    useEffect (()=>{
        axios.get('https://tt-202-african-marketplace.herokuapp.com/api/auth/users' )
                .then(res => {
                    setUser (res.data)
                    console.log('AXIOS SUCCESS: ', res);
                })
                .catch(err => {
                    console.error('There was an error registering: ', err)
                    console.log('AXIOS FAIL: values attempted: ' )
                })
    },[])
    
    return(
        <div>
            {user.map(item => <UserCards data={item}/>)}
        </div>
    )
}
export default UsersList