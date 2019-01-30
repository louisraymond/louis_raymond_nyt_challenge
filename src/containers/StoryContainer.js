import React from 'react'
import StoryDisplayFront from '../StoryDisplayFront'

class StoryContainer extends React.Component{

  state = {
    stories:{results:[]}
  }

  componentDidMount(){
    const url = 'https://api.nytimes.com/svc/news/v3/content/nyt/all.json?limit=10&api-key=W01gIBZNA12SAoUjGQ5Tvv9moSjSGshj'
    fetch(url)
      .then(results =>results.json())
      .then(data => {
        this.setState({stories:data})
        console.table(this.state.stories.results)
    })
  }

  storyRender(stories){
    return stories.map( story => <StoryDisplayFront story= {story} />)
  }


  render(){
    return(
      <div>
        {this.storyRender(this.state.stories.results)}
      </div>)
  }
}

export default StoryContainer
