import React, {Component} from "react";
import API from "../utils/API"
import ShowImages from "../ShowImages"



class Search extends Component {

    state = {
        search: "",
        result: []
    }
    // this.setState({result: res.data})
    searchBreed = (query) => {
        API.search(query).then((res) =>  this.setState({result: res.data.message})).catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault(); 
        this.searchBreed(this.state.search);
    }


    render() {
    return(
    <div>
        <div className="container mt-5 mb-5">
{/* Search */}

        <div className="card text-center">
            <div className="card-header">
                <h2>Search Breed</h2>
            </div>
        <div className="card-body">

        <form>
            <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
            onChange={this.handleInputChange}
            value={this.state.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For a Dog Breed"
            id="search"
            />
            <br />
            <button onClick={this.handleFormSubmit} className="btn btn-primary">
          Search
            </button>
        </div>
        </form>

        </div>
        </div>

{/* Results */}
        <div className="card text-center mt-5">
            <div className="card-header">
                <h2>Results</h2>
            </div>

            <div className="card-body">
            <div className="text-center">
                <ShowImages images={this.state.result} search={this.state.search}/>
            </div>

            </div>
        </div>

        </div>
      </div>
    )};
}

export default Search;