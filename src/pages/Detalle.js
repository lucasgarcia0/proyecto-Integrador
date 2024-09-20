import { Component } from "react";
import Card from "../components/Card/Card";

class Detalle extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            movie: null,
            isLoading: true
        }
    }
    componentDidMount(){
        const {id} = this.props.match.params
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9458a99baf5a9ba3fe341cd43217ef95`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                movie: data,
                isLoading: false
            })
        })
        .catch((e) => console.log(e)) 
    }
    render(){
        const { movie, isLoading } = this.state;
        return(
            <div>
                {isLoading ? <p>Loading...</p> : <Card movie={movie} />}
            </div>
        )
    }
}

export default Detalle