import React from 'react'

//components
import StoryDisplay from '../StoryDisplay'

class StoryContainer extends React.Component{


  state = {
    stories:[],
    searchTerm:''
  }//end of state

  handleChange = (event) => {
     this.setState({searchTerm : event.target.value})
   }//This function updates the search term held in state, I used it in the search bar.


  fetchRequest(input=''){
    input =`&q=` + input
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:(%22The%20New%20York%20Times%22)${input}&sort=newest&api-key=W01gIBZNA12SAoUjGQ5Tvv9moSjSGshj`

    fetch(url)
      .then(results =>results.json())
      .then(data => {
        this.setState({stories:data.response.docs})
    })
  }//This is a fetch request, It takes in a string for a search term, and uses it to query the API-
    //if there is no search term, it defaults to an empty string

  componentDidMount(){
    this.fetchRequest()
  }//end of componentDidMount

  storyRender(stories){
    return stories.map( story => <StoryDisplay key={story.headline.main} className='story' story= {story} />)
  }//This maps over the stories we have stored in an array, and returns a StroyDisplay element for each one.



  render(){
    return(
      <div >

        <div className="searchBarDiv">
          <h2>Louis Raymond's New York Times App</h2>
          <input type="text" id="searchBar"
            placeholder='Search Term Here'
            onChange={this.handleChange}/>
          <button className='Button' onClick={(e)=> this.fetchRequest(this.state.searchTerm)}>Search News! </button>
        </div>

        <div className='container'>
      {this.storyRender(this.state.stories)}
      </div>
      </div>)
  }//end of render
}//end of StoryContainer

export default StoryContainer
