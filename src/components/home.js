import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  handleSearchBarchSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
    this.props.history.push('/results');
    });
    

  }

  render() {
    return (
      <div className="home">
       <Logo />
       <SearchBar page="home" onSubmit={(query) => this.handleSearchBarchSubmit(query)} />
       <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Home);