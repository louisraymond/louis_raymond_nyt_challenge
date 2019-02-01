import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoryContainer from './containers/StoryContainer'
import StoryDisplay from './StoryDisplay'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})


it('renders the StoryContainer', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StoryContainer />, div)
})
