import React, {Component} from "react"
class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            esFavorito: false
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
            localStorage.setItem("favoritos", stringStorage)
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
    render() {
        return (
            <article className="data-detail">
                <div className="card-content">
                    <h4>{this.props.movie.title}</h4>
                    <p>datos de ficha</p>
                    
                </div>
                <button onClick={()=> !this.state.esFavorito ? this.agregarAFavoritos(): this.quitarFavoritos() }>
                    {!this.state.esFavorito ? "agregar a favoritos": "quitar de favoritos"}
                    </button>
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </article>
        )
    }
}

export default Card
