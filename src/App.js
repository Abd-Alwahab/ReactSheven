import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Photos from './Photos';
import Posts from './Posts';
import Users from './Users';
import Home from './Home';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
         <Nav />
         <Route path="/" component={Home}/>
         <Route path="/users" component={Users}/>
         <Route path="/posts" component={Posts}/>
         <Route path="/photos" component={Photos}/>
       
         </div>
      </BrowserRouter>
    );
  }
}

export default App;
