import React from 'react'
import Card from "../Card/Card"
import "./MoviesGrid.css"
const MoviesGrid = (props) => {
    return(
        <section className='main'>
            <div  className= 'card-container'>{props.movies.slice(0 , props.limit).map((movie, index) => (
                <Card key={index} movie={movie} />
            ))}</div>
        </section>
    )
}

export default MoviesGrid;