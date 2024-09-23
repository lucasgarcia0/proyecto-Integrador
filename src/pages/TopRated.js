import { Component } from "react"
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"
import Filter from "../components/Filter/Filter"

class TopRated extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            moviesFiltrado: [],
            isLoading:true,
            actualPage: 1
        }
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9458a99baf5a9ba3fe341cd43217ef95&page=${this.state.actualPage}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                    moviesFiltrado: data.results,
                    isLoading: false
                })
            })
            .catch((e) => console.log(e))
    }
    handleFilter = (filteredMovies) => {
        this.setState({ moviesFiltrado: filteredMovies });
    }
    handleLoadMore(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95&page=${this.state.actualPage}`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                movies: this.state.movies,
                moviesFiltrado: this.state.moviesFiltrado.concat(data.results),
                actualPage: this.state.actualPage + 1,
                isLoading: false
            })
        })
    }
    render() {
        return (
            <>
                {!this.state.isLoading ?
                    <div>
                        <h2>Top rated movies:</h2>
                        <Filter onFilter={this.handleFilter} movies= {this.state.movies}/>
                        <MoviesGrid movies={this.state.moviesFiltrado} limit= {this.props.limit}/> 
                    </div>
                    :
                    <p>Loading...</p>}
                    {this.props.limit !== 5 ? <button onClick={() => this.handleLoadMore()}>Cargar más</button> : <p></p>}

            </>
        )
    }
}
export default TopRated