import React from 'react'
import StoryDisplayFront from '../StoryDisplayFront'

class StoryContainer extends React.Component{

  state = {
    stories:[]
  }

  componentDidMount(){
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:(%22The%20New%20York%20Times%22)&sort=newest&api-key=W01gIBZNA12SAoUjGQ5Tvv9moSjSGshj'
    fetch(url)
      .then(results =>results.json())
      .then(data => {
        this.setState({stories:data.response.docs})
        console.table(this.state.stories)
    })
  }

  storyRender(stories){
    return stories.map( story => <StoryDisplayFront story= {story} />)
  }


  render(){
    return(
      <div>
        {this.storyRender(this.state.stories)}
      </div>)
  }
}

export default StoryContainer
