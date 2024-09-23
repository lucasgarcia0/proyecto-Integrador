import { Component } from "react";
class Filter extends Component {
    constructor(props){
        super(props)

        this.state = {
            query: "",
            moviesFiltradas: this.props.movies,

        }
    }

    handleInputChange(e){
        const query = e.target.value.toLowerCase();
        this.setState(
            {
              query: query,
              moviesFiltradas: this.props.movies.filter((movie) =>
                movie.title.toLowerCase().includes(query)
              ),
            },
            () => {
                this.props.onFilter(this.state.moviesFiltradas);
              }
        )
    }
   
    render(){
        return(
            <>
                <div>

                        <input 
                            type="text"
                            value={this.state.query}
                            placeholder="Filtrar por título"
                            onChange={(e) => this.handleInputChange(e)}
                        />

                </div>
            </>
        )
    }
}

export default Filter