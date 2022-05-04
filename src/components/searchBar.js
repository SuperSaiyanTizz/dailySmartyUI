import React, { Component } from 'react';
import { field, reduxForm} from 'redux-form';

import { withRouter} from 'react-router-dom';

class SearchBar extends Component {
    
    handleFormSubmit = function({query}) {
        console.log('trying to handle submit query', query);
        //navigate to new route.
        this.props.history.push('/results');
    }
    
    renderInput(field) {
        return <input type= "text" placeholder="search DailySmarty" {...field.input}/>
    }
    
    render(){

        const { handleSubmit } = this.props;
        
        return (
            <form className="searchBar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}> 
                <input name="query" component={this.renderInput} />
              

            </form>
        )
    }

}

SearchBar = reduxForm ({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;