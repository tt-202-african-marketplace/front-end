import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const Navigationdiv = styled.div`
width: 100%;
height 4rem;
display: flex;
align-items: center;
background: #d12d21;
// justify-content: center;
a {
    margin-left: 4rem;
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
}
`

const Navigation = () => {
    return (
        <Navigationdiv>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/products">Products</Link>
            <Link to="/shop-owners">Shop Owners</Link>
        </Navigationdiv>
    )
}

export default Navigation
