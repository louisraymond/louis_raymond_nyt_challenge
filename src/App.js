import React from 'react';
import './App.css';


//components
import StoryContainer from './containers/StoryContainer'


class App extends React.Component {



  render() {
    return (
      <div className="App">
        <StoryContainer />
      </div>
    );
  }//end of render
}//end of App

export default App;
