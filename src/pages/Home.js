import { Component } from "react"
import SearchForm from "../components/SearchForm/SearchForm"
import TopRated from "./TopRated"
import Recent from "./Recent"

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
            <TopRated/>
            <Recent/>


        </>
    )
    }
    
}
export default Home