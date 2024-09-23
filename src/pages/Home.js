import { Component } from "react"
import SearchForm from "../components/SearchForm/SearchForm"
import TopRated from "./TopRated"
import Recent from "./Recent"
import { Link } from "react-router-dom/cjs/react-router-dom.min"


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:true
        }
    }
    componentDidMount(){
        this.setState({
            isLoading: true
        })
    }
    render(){
        return (
        <>
            <SearchForm history={this.props.history}/>
            <TopRated limit= {5}/>
            <Link to = "/topRated">Ver todas</Link>
            <Recent limit= {5}/>
            <Link to = "/recent">Ver todas</Link>


        </>
    )
    }
    
}
export default Home

//<SearchForm history={this.props.history}/>
  //          <MoviesGrid movies = {[]} limit= {5}/>
    //        <TopRated />
      //      <Recent />