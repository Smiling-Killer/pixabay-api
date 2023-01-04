import React from 'react';
import './App.css';
import Searchinput from './components/searchinput';
import axios from 'axios';
import Imagelist from './components/imagelist';
class App extends React.Component {
  constructor() {
    super()
    this.state = {image :[]}
  }

  async onSearchSubmit(entry) {
    const response = await axios.get(`https://pixabay.com/api/?key=32443665-35dba8fc88b231f7286c8a23b&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits);
    this.setState({image : response.data.hits})
  }
  
  render() {
   
    return (
      <div className="ui container" style={{paddingTop:"20px"}}>
        <Searchinput onSearchSubmit={this.onSearchSubmit.bind(this)} />
        <Imagelist image={ this.state.image} />
      </div>       
    )
  }
}

export default App;
