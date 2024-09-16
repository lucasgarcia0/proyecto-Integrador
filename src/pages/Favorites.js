import { Component } from "react"
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"

class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            movies:[]
        }
    }
    componentDidMount(){
        const storage= localStorage.getItem("favoritos")
        if (storage!== null) {
            const parsedStorage= JSON.parse(storage)
            Promise.all(
                parsedStorage.map((id)=> 
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7aleefe33f85b67fa3b`)
                .then((response)=> response.json())
                .then((data)=>{
                    this.setState({
                        movies: [...this.state.movies, data]
                    })
                    console.log(data);
                })
                )
            )
        }
    }
    render() {
        return (
            <>
                <MoviesGrid movies= {this.state.movies}/>
            </>
        )
    }

}

export default Favorites