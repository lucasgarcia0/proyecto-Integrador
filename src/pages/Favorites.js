import { Component } from "react"
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"

class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            NoFav: false
        }
    }
    componentDidMount() {
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            Promise.all(
                parsedStorage.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)
                        .then((response) => response.json())
                )
            )

            .then((data) => {
                this.setState({
                    movies: data
                })
                console.log(data);
            })


        }
    }
    render() {
        return (
            <>
                {this.state.movies.length > 0 ?
                    <>
                    <h2 className="titulo">Tus peliculas favoritas son:</h2>
                    <MoviesGrid movies={this.state.movies} />
                    </>
                    : <p> No hay peliculas favoritas</p>
                }
            </>
        )
    }

}

export default Favorites