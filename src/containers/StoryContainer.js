import React from 'react'

//components
import StoryDisplay from '../StoryDisplay'

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
    return stories.map( story => <StoryDisplay key={story.headline.main} className='story' story= {story} />)
  }



  render(){
    return(
      <div >

        <div className="searchBarDiv">
          <img alt='' src="https://blueharvest.io/bundle/fd5e4e9ceeeb2801f3f86b21465237bc-327.png"/>
          <h2>Blue Harvest New York Times App</h2>
          <input type="text" id="searchBar"
            placeholder='Search Term Here'
            onChange={this.handleChange}/>
          <button className='Button' onClick={(e)=> this.fetchRequest(this.state.searchTerm)}>Search News! </button>
        </div>

        <div className='container'>
      {this.storyRender(this.state.stories)}
      </div>
      </div>)
  }
}

export default StoryContainer
