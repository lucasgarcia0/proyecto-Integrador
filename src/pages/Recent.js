import React, {Component} from 'react'
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"

class Recent extends Component{
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
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95`)
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
            <h2>Recent movies:</h2>
            <MoviesGrid movies={this.state.movies} limit={this.props.limit}/> 
            </>
            : <p>Loading...</p>}
        </>
        )
    }
}
export default Recent