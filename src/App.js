import React from "react";

import { BrowserRouter ,Switch ,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Reports from  "./Pages/Reports";
import Products from "./Pages/Products";

import Store from "./Components/Store";

import ShoppingCartProvider from "./context/ShoppingCartContext";




 const App =()=> {

  return (

    
       
       <ShoppingCartProvider>
        <ToastContainer/>
        

        <Switch>
        <Route exact path='/'> <Home/></Route>

        <Route exact path='/form'> <Form/></Route>
        <Route exact path='/success'> <Success/></Route>
        <Route exact path='/login'> <Login/></Route>
        <Route exact path='/signup'> <Signup/></Route>
        <Route exact path='/reports'> <Reports/></Route>
        <Route exact path='/products'> <Products/></Route>
        <Route exact path='/store'> <Store/></Route>

        </Switch>
        
        </ShoppingCartProvider>
    



      );

    }




export default App;
