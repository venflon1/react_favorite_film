import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import MainTemplate from './components/MainTemplate';
import Footer from './components/Footer';
import './App.css';


const API_KEY = "abf56084";
const API_BASEURL = "http://www.omdbapi.com"
class App extends Component{

  constructor(props){
    super(props);
    this.state={
        movies: [],
        totalCount: 0
    }
  }


  fetchFilmFromAPI = (search = '') =>{
    let API_REQUEST = API_BASEURL + '?apikey=' + API_KEY + '&s=' + search;

    return fetch(API_REQUEST)
           .then( (response) => response.json() )
           .catch( (error) =>  console.log(error) );
  }

  componentDidMount(){
      this.fetchFilmFromAPI('Harry Potter').then( (result) => {
        console.log(result);
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
            <SearchBar />
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
