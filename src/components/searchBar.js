import React, { Component } from 'react';
import { field, reduxForm} from 'redux-form';

class SearchBar extends Component {
    
    handleFormSubmit = function ({query}) {
        this.props.onSubmit(query);
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

export default SearchBar;