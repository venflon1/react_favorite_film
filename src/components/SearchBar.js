import React, {Component, Fragment} from 'react';
import Movie from './Movie';


class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
                    searchTerm : ""
                }
  }

  onChangeHandler = (event) =>{
    const searchValue = event.target.value;
    this.setState({
        searchTerm: searchValue
    })
  }

  onSearchClick = (event) =>{
    event.preventDefault();

    const searchCryteria = this.state.searchTerm;
    console.log(searchCryteria);
    this.props.onSearchHandler(searchCryteria);
  }

  render(){

    return (
              <Fragment>
                <form className="form-inline my-2 my-lg-0">
                  <input onChange={this.onChangeHandler} value={this.state.searchTerm} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button onClick={ this.onSearchClick } className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </Fragment>
            );
  }

}

export default SearchBar;
