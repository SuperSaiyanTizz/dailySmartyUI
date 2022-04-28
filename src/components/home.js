import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPost';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentPosts/>
        </div>
        
      </div>
    );
  }
}
