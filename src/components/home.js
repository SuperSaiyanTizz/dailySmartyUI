import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPost';

export default class Home extends Component {
  
  handleSearchBarchSubmit(query) {
    console.log('trying to handle submit query', query);
    this.props.history.push('/results');

  }
  
  render() {
    return (
      <div className='home'>
        <div>
          <Logo/>
          <SearchBar onSubmit={(query)=> this. handleSearchBarchSubmit(query)}/>
          <RecentPosts/>
        </div>
         </div>
    );
  }
}
