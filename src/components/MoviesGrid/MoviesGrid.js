import React from 'react'
import Card from "../Card/Card"
const MoviesGrid = (props) => {
    

    return(
        <div>{props.movies.map(movie => (<Card movie={movie}/>))}</div>
    )
}

export default MoviesGrid;