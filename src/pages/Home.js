import { Component } from "react"
import SearchForm from "../components/SearchForm/SearchForm"
import TopRated from "./TopRated"
import Recent from "./Recent"
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
        <>
            <SearchForm history={this.props.history}/>
            <MoviesGrid movies = {[]} limit= {5}/>
            <TopRated />
            <Recent />


        </>
    )
    }
    
}
export default Home