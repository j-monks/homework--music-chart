import React from 'react';
import MusicList from '../components/MusicList';
import MusicItem from '../components/MusicItem';

class MusicTable extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      music: []
    };
  }

  componentDidMount() { // where you make your API calls, normally after constructor
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
      .then(res => res.json())
      .then(music => this.setState({ music: music.feed.entry }))
      .catch(err => console.log(err));
  }

  render(){

     return (
      <div>
        <h2>MusicTable!</h2>
        <MusicItem />
        <MusicList music={this.state.music} />
      </div>
    );
  }
}

export default MusicTable;
