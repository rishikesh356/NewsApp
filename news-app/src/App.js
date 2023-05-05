

import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


export default class App extends Component {
  constructor(){
    super();//call constructor of parent class
    
    this.state={
       mode : 'light',
       apikey:process.env.REACT_APP_API_KEY
       
    }
}

  toggleMode = ()=>{
    if(this.state.mode==='light'){
      this.setState({
        mode: 'dark'
      })
    }
    else{
      this.setState({
        mode :'light'
      })
    }
  }
  render() {
    return (
      <div className="newsContain" style={{backgroundColor:this.state.mode==='light'?'white':'#2d2d2d'}}>
        <Router>
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
 
        <Routes>
          <Route path='/' element={<News key='general'  to='/' mode={this.state.mode} pagesize={6} apiKey={this.state.apikey} country='in' category='general' />} />
          <Route exact path='/business' element={<News key='business'  to='/business' mode={this.state.mode} pagesize={6} apiKey={this.state.apikey} country='in' category='business' />} />
          <Route exact path='/entertainment' element={<News key='entertainment'  to='/entertainment' mode={this.state.mode} pagesize={6} apiKey={this.state.apikey} country='in' category='entertainment' />} />
          <Route exact path='/health' element={<News key='health'  to='/health' mode={this.state.mode} pagesize={6} apiKey={this.state.apikey} country='in' category='health' />} />
          <Route exact path='/science' element={<News key='science'  to='/science' mode={this.state.mode} pagesize={6} apiKey={this.state.apikey} country='in' category='science' />} />
          <Route exact path='/sports' element={<News key='sports'  to='/sports' mode={this.state.mode} pagesize={6} apiKey={this.state.apikey} country='in' category='sports' />} />
          <Route exact path='/technology' element={<News  key='technology' to='/technology' mode={this.state.mode} pagesize={6} apiKey={this.state.apikey} country='in' category='technology' />} />
       
       </Routes>
       </Router>
      </div>
       
    )
  }
}

