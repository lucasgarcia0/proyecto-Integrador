import { Component } from "react"
import SearchForm from "../components/SearchForm/SearchForm"


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
        </>
    )
    }
    
}
export default Home