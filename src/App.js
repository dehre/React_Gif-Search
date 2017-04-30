import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  } 

  //perform a default search when the app first renders, to not show it blank
  componentDidMount(){
    this.performSearch("cats");
  }

  //Using the input field, perform a search for images
  performSearch = (query)=>{
    const link = `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
    axios.get(link)
      .then(response=>{
      this.setState({
        gifs: response.data.data
      });
      })
      .catch(error=>{
        console.log("Error fetching and parsing data",error)
      })
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
