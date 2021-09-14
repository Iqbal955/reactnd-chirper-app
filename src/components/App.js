import React, { Component } from 'react'
import {connect}  from "react-redux";
import {handleInitialData} from "../actions/shared.js"
import  Dashboard  from './Dashboard.js';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
       <Dashboard/>
      </div>
    )
  }
}

export default connect()(App)