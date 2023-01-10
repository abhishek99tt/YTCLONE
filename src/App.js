import React, { Component } from 'react'

import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';
import youtube from './api/youtube';

export class App extends Component {

  state = {
    videos:[],
    selectedVideo:null
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b541589e30msh3102db31f6a89f5p12848cjsn58fa8da32642',
        'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
      }
    };
    
    fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=5', options)
      .then(response => response.json())
      .then(response => this.handleSubmit(response))
      .catch(err => console.error(err));
    
  }

  onVideoSelect = (video) => this.setState({ selectedVideo: video});

  handleSubmit = async(searchTerm) => {
    const response  = await youtube.get('search', {
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyBgmBwtyQF194KKEnqSpwXZPHnaNq3Lyog',
        q: searchTerm
    }
    })
    this.setState({ videos: response.data.items, selectedVideo:response.data.items[0] });
  }
  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <Grid justify="center"container spacing={16}>
        <Grid item xs={12}>
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <SearchBar onFormSubmit={this.handleSubmit}/>
                </Grid>
                <Grid item xs={8}>
                    <VideoDetail video={selectedVideo}/>
                </Grid>
                <Grid item xs={4}>
                    <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                </Grid>
            </Grid>

        </Grid>
      </Grid>
    )
  }
}

export default App