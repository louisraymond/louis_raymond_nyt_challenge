import React from 'react';

class StoryDisplayFront extends React.Component {

render () {
  return (
    <div>
      <h2>{this.props.story.title}</h2>
      <img src={this.props.story.thumbnail_standard}/>

    </div>)}

}


export default StoryDisplayFront
