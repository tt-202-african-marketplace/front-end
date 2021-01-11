import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login'
import Navigation from './Components/Navigation'
import ItemsList from "./Components/ItemsList";
import UsersList from "./Components/UsersList";
import Owner from './Components/Owner'

function App() {
  
  return (
    
    <div>
<Navigation/>
    <Switch>
      {/* <Route path="/" render={() => <Home/>}/> */}
      <Route path="/login" render={() => <Login/>}/>
      <Route path="/register" render={() => <Register/>}/>
      <Route path="/products" render={() => <ItemsList/>}/>
      <Route path="/users-list" render={() => <UsersList/>}/>
      <Route path="/owner" render={() => <Owner/>}/>
    </Switch>

    </div>

  );
}

export default App;
