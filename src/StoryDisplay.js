import React from 'react';

class StoryDisplay extends React.Component {

state = {
  isClicked : false
}

handleClick = () => {
  this.setState({isClicked:!this.state.isClicked})
}

getPhoto = (multimedia) => {
  if (multimedia.length === 0){
      return (<img alt='' src ='https://myintuition.org/wp-content/uploads/2018/09/the-new-york-times-logo.jpg'/>)
    }else{
    let array = []
    multimedia.forEach(media =>{
        if (media.type === 'image' && media.subType === 'thumbnail' && array.length <=1){
          let string = `https://static01.nyt.com/${media.url}`

          array.push(string)
        }
      })
      return (<img alt='' src= {array[0]}/>)

    }


}

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

}

render () {
    return(
      <div className='story'>
      {this.TitleOrInfo(this.state.isClicked)}
      </div>)
  }

}


export default StoryDisplay
