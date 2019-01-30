import React from 'react';
import './App.css';


//components
import StoryContainer from './containers/StoryContainer'

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



  render() {
    return (
      <div className="App">
        <StoryContainer />
      </div>
    );
  }//end of render
}

export default App;
