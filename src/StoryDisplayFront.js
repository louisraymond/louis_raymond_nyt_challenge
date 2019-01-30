import React from 'react';

class StoryDisplayFront extends React.Component {

state = {
  isClicked : false
}

handleClick = () => {
  this.setState({isClicked:!this.state.isClicked})
}

getPhoto = (multimedia) => {
  if (multimedia.length === 0){
      return (<img src ='https://myintuition.org/wp-content/uploads/2018/09/the-new-york-times-logo.jpg'/>)
    }else{
    let array = []
    multimedia.forEach(media =>{
        if (media.type === 'image' && media.subType === 'thumbnail' && array.length <=1){
          let string = `https://static01.nyt.com/${media.url}`

          array.push(string)
        }
      })
      return (<img src= {array[0]}/>)

    }


}

TitleOrInfo = (isClicked) => {
  if (isClicked === true){
    return (
      <div onClick={this.handleClick}>
        <p>{this.props.story.snippet}</p>
        <a href={this.props.story.web_url}>Click Here To Read The Story!</a>

      </div>
    )

  }else{
    return (
      <div onClick={this.handleClick}>
        <h2>{this.props.story.headline.main} </h2>
        {this.getPhoto(this.props.story.multimedia)}
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
