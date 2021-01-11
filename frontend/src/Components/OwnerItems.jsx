import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from './Cards'
function ItemsList() {
    const [product, setProduct] = useState([])
    useEffect (()=>{
        axios.get('https://tt-202-african-marketplace.herokuapp.com/api/products/user/1' )
                .then(res => {
                    setProduct (res.data)
                    console.log('AXIOS SUCCESS: ', res);
                })
                .catch(err => {
                    console.error('There was an error registering: ', err)
                    console.log('AXIOS FAIL: values attempted: ' )
                })
    },[])
    
    return(
        <div clasName = "body">
            {product.map(item => <Cards data={item}/>)}
        </div>
    )
}
export default ItemsList