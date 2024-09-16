import React, {Component} from 'react'
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"

class SearchResults extends Component{
    constructor(props){
        super(props)

        this.state = {
            movies: [],
            isLoading: true,
        }
    }
    componentDidMount(){
        this.setState({
            isLoading: true
        })
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=adaebcb9e821851ba063cc72531a85e7`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                movies: data.results,
                isLoading: false
            })
        })
        .catch((e) => console.log(e))
    }

    render(){
        return(
        <>
            {!this.state.isLoading ? 
            <>
            <MoviesGrid movies={this.state.movies}/> 
            <p>{this.props.location.state.query}</p>
            </>
            : <p>Loading...</p>}
        </>
        )
    }
}
export default SearchResults
