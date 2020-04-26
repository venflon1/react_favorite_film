import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import MainTemplate from './components/MainTemplate';
//import DropdownMenu from './components/DropDownMenu';
import NavItem from './components/NavItem';
import Footer from './components/Footer';
import './App.css';


const API_KEY = "abf56084";
const API_BASEURL = "http://www.omdbapi.com"
const DEFAULT_SERACH = "Harry Potter";
class App extends Component{

  constructor(props){
    super(props);
    this.state={
        movies: [],
        totalCount: 0
    }
  }

  componentDidMount(){
    this.searchMovie(DEFAULT_SERACH);
  }

  fetchFilmFromAPI = (search = 'Harry Potter') =>{
    let API_REQUEST = API_BASEURL + '?apikey=' + API_KEY + '&s=' + search;

    return fetch(API_REQUEST)
           .then( (response) => response.json() )
           .catch( (error) =>  console.log(error) );
  }

  searchMovie = (searchCryteria = "") =>{
    if(searchCryteria.length < 1)
      return ;

    this.fetchFilmFromAPI(searchCryteria).then( result => {
      this.setState({
          movies: result.Search,
          totalCount: result.totalResults});
    });
  }

  render(){
    return (
      <Fragment>
        <Header>
          <NavBar>
            <MenuBar>
              <NavItem name="Home" />
              <NavItem name="Category" />
              <NavItem name="Last arrived" />
            </MenuBar>
            <SearchBar onSearchHandler={this.searchMovie}/>
          </NavBar>
        </Header>
        <MainTemplate>
          <MovieList listMovies={this.state.movies} />
        </MainTemplate>
          <Footer />
      </Fragment>
    );

  }
}

export default App;
