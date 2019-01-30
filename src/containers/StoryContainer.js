import React from 'react'
import StoryDisplayFront from '../StoryDisplayFront'

class StoryContainer extends React.Component{


  state = {
    stories:[],
    searchTerm:''
  }

  handleChange = (event) => {
     this.setState({searchTerm : event.target.value})
   }


  submitSearch = () => {
    console.log(this.state.searchTerm)
  }

  fetchRequest(input=''){
    console.log(this.state.searchTerm)
    input =`&q=` + input
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:(%22The%20New%20York%20Times%22)${input}&sort=newest&api-key=W01gIBZNA12SAoUjGQ5Tvv9moSjSGshj`

    fetch(url)
      .then(results =>results.json())
      .then(data => {
        this.setState({stories:data.response.docs})
    })
  }

  componentDidMount(){
    this.fetchRequest()
  }

  storyRender(stories){
    return stories.map( story => <StoryDisplayFront story= {story} />)
  }


  render(){
    return(
      <div>
          <label >Enter Seach Term: </label>
          <input type="text" id="filter"
            placeholder='Search Term Here'
            onChange={this.handleChange}/>
          <button onClick={(e)=> this.fetchRequest(this.state.searchTerm)}/>
        {this.storyRender(this.state.stories)}
      </div>)
  }
}

export default StoryContainer
