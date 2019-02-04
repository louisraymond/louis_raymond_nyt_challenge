import React from 'react';

class StoryDisplay extends React.Component {

state = {
  isClicked : false
}

handleClick = () => {
  this.setState({isClicked:!this.state.isClicked})
}//end of handleClick- this function will make the component "know" if it has been clicked, storing the information in state

getPhoto = (multimedia) => {
  if (multimedia.length === 0){
      return (<img alt='' src ='https://myintuition.org/wp-content/uploads/2018/09/the-new-york-times-logo.jpg'/>)
    }else{
      let temporaryArray = []
      multimedia.forEach(media =>{
        if (media.type === 'image' && media.subType === 'thumbnail' && temporaryArray.length <=1){
          let temporaryString = `https://static01.nyt.com/${media.url}`
          temporaryArray.push(temporaryString)
        }
      })
      return (<img alt='' src= {temporaryArray[0]}/>)
    }//I built this function to deal with the case that stories might not have a photo in their multimedia package



}//end of getPhoto- this grabs the thumbnail if one is available, if there isn't one, then it grabs an image of the NYT logo

TitleOrInfo = (isClicked) => {
  if (isClicked === true){
    return (
      <div id='storyCard' onClick={this.handleClick}>
        <p className='snippet'>{this.props.story.snippet}</p>
        <a rel="noopener noreferrer" target="_blank" href={this.props.story.web_url}>Click Here To Read The Story!</a>
      </div>)

  }else{
    return (
      <div id='storyCard' onClick={this.handleClick}>
        <h2>{this.props.story.headline.main} </h2>
        {this.getPhoto(this.props.story.multimedia)}
      </div>)
  }
}//end of TitleOrInfo-This function is used to show the picture and title of a story before it is clicked, and the snippet
//along with the link once it is.

render () {
    return(
      <div className='story'>
      {this.TitleOrInfo(this.state.isClicked)}
      </div>)
  }//end of render

}//end of StoryDisplay


export default StoryDisplay
