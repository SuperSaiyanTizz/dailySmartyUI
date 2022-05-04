import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPost';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentPosts/>
        </div>
        ssss
        
      </div>
    );
  }
}
