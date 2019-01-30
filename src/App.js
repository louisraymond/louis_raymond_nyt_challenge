import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {

  state:{
    data:[]
  }


  componentDidMount(){
    const url = 'https://api.nytimes.com/svc/news/v3/content/nyt/all.json?limit=10&api-key=W01gIBZNA12SAoUjGQ5Tvv9moSjSGshj'
    fetch(url)
      .then(results =>results.json())
      .then(data => this.setState({data:data}))

  }


  render() {
    return (
      <div className="App">
      </div>
    );
  }//end of render
}

export default App;
