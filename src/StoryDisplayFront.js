import React from 'react';

class StoryDisplayFront extends React.Component {

state = {
  isClicked : false
}

handleClick = () => {
  this.setState({isClicked:!this.state.isClicked})
}

TitleOrInfo = (isClicked) => {
  if (isClicked === true){
    return (
      <div onClick={this.handleClick}>
        <p>{this.props.story.abstract}</p>
        <a href={this.props.story.url}>Click Here To Read The Story!</a>

      </div>
    )

  }else{
    return (
      <div onClick={this.handleClick}>
        <h2>{this.props.story.title}</h2>
        <img src={this.props.story.thumbnail_standard}/>

      </div>)
  }

}

render () {
    return(
      <div>
      {this.TitleOrInfo(this.state.isClicked)}
      </div>
    )
  }

}


export default StoryDisplayFront
