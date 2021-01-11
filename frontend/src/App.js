import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';

// import register from './Components/Register';
// import ItemsList from './Components/ItemsList';
import Owner from './Components/Owner';
import NewItem from './Components/NewItem'
// import Cards from './Components/Cards'
// import ItemsList from './Components/ItemsList'
import Navigation from './Components/Navigation'

import register from './Components/Register';
import Item from './Components/Item';
import Owner from './Components/Owner';


function App() {
  
  return (
    
    <div>
<Navigation/>
    
    <Switch>
      <Route path="/new-item" render={() => <NewItem/>}/>
      <Route path="/" render={() => <Owner/>}/>
    </Switch>

    {/* <ItemsList/> */}
    </div>

  );
}

export default App;
