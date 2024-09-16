import React, {Component} from "react"
class Card extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <article className="data-detail">
                <div className="card-content">
                    <h4>{this.props.movie.title}</h4>
                    <p>datos de ficha</p>
                </div>
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </article>
        )
    }
}

export default Card
