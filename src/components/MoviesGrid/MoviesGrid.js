import React from 'react'

const MoviesGrid = () => {
    return(
        <div>{movies.map(movie => <Card movie={movie}/>)}</div>
    )
}
export default MoviesGrid