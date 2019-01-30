import React from 'react'

class SearchBar extends React.Component {

  state = {
    searchTerm:''
  }


  handleChange = (event) => {
    this.setState({searchTerm=event.target.value})

  }

  submitSearch = () => {
    console.log(this.state.searchTerm)
  }

  render(){
    return(
      <div>
        <label >Enter Seach Term: </label>
        <input type="text" id="filter"
          value={this.state.=searchTerm}
          onChange={this.handleChange}/>
        <button onClick={sumbitSearch}
      </div>)


  }
}

export default SearchBar
