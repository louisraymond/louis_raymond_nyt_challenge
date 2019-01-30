import React from 'react';
import './App.css';

//components
import StoryDisplayFront from './StoryDisplayFront'

//

// We will use New York Times API to create a single page application that

// presents the latest 10 news about a topic.
//Your goal is to get the latest 10 news from the API
//along with a small summary and a link for each one.

//The final result should be a list with the 10
// news items, each one comprising an image and a title and a search input.

// By default it will load the news related to any topic you decide.
//Clicking on an item shows its summary,
//along with an external link to the original article.
// The search input should change the
// news topic. You can adjust the UI how you see fit for the best result,



class App extends React.Component {

  state:{
    data:[]
  }


  componentDidMount(){
    const url = 'https://api.nytimes.com/svc/news/v3/content/nyt/all.json?limit=10&api-key=W01gIBZNA12SAoUjGQ5Tvv9moSjSGshj'
    fetch(url)
      .then(results =>results.json())
      .then(data => {
        this.setState({data:data})
        console.table(data.results)
    })

  }


  render() {
    return (
      <div className="App">
        <StoryDisplayFront/>
      </div>
    );
  }//end of render
}

export default App;
