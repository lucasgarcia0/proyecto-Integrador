import React, {Component} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Card.css'
class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            esFavorito: false,
            verMas:false
        }
    }
    componentDidMount(){
        const storage= localStorage.getItem("favoritos")
        if (storage !== null){
            const parsedStorage= JSON.parse(storage);
            const estaEnFavoritos= parsedStorage.includes(this.props.movie.id)
            if (estaEnFavoritos){
                this.setState({
                    esFavorito:true
                })
            }
    }
}
    agregarAFavoritos(){
        const storage= localStorage.getItem("favoritos")
        if (storage !== null){
            const parsedStorage= JSON.parse(storage);
            parsedStorage.push(this.props.movie.id)
            const stringStorage= JSON.stringify(parsedStorage)
            localStorage.setItem("favoritos", stringStorage)
        }else {
            const primerFavorito= [this.props.movie.id]
            const stringStorage= JSON.stringify(primerFavorito)
            localStorage.setitem("favoritos", stringStorage)
        }
        this.setState({
            esFavorito: true
        })
    }
    quitarFavoritos(){
        const storage= localStorage.getItem("favoritos")
        const parsedStorage= JSON.parse(storage);
        const restoFavoritos= parsedStorage.filter((id) => id !== this.props.movie.id)
        const stringStorage= JSON.stringify(restoFavoritos)
        localStorage.setItem("favoritos", stringStorage)
        this.setState({
            esFavorito: false
        })
    }
    handleVerMas() {
        this.setState({
            verMas: !this.state.verMas,
        })
    }
    render() {
        console.log(this.props.movie);
        return (

                <div className="character-card">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt="" />
                    <h4>{this.props.movie.title}</h4>
                    <div className={this.state.verMas ? "mostrar" : "ocultar"}> 
                    <p>{this.props.movie.overview}</p>

                    </div>

                    <button onClick={() => this.handleVerMas()}>{this.state.verMas ? "Ocultar descripcion" : "Ver descripcion"} </button>
                    
                    <button onClick={()=> !this.state.esFavorito ? this.agregarAFavoritos(): this.quitarFavoritos() }>
                    {!this.state.esFavorito ? "agregar a favoritos": "quitar de favoritos"}
                    </button>
                    <Link to ={`/movie/id/${this.props.movie.id}`}>Ver detalle de pelicula</Link>
                </div>
                


        )
    }
}

export default Card
