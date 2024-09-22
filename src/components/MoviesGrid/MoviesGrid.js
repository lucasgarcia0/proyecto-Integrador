import React from 'react'
import Card from "../Card/Card"
import "./MoviesGrid.css"
const MoviesGrid = (props) => {
    

    return(
        <div  className= 'Card-grider'>{props.movies.slice(0 , props.limit).map((movie, index) => (
            <Card key={index} movie={movie} />
        ))}</div>
    )
}

export default MoviesGrid;