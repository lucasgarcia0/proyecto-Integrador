import React from 'react'
import Card from "../Card/Card"
const MoviesGrid = (props) => {
    return(
        <div>{props.movies.map((movie, idx) => (<Card key={idx} movie={movie}/>))}</div>
    )
}

export default MoviesGrid;