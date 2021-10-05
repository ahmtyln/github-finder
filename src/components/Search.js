import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword: ""
        }
    }

    onChange(e) {
        this.setState({ keyword: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.state.keyword === "") {
            this.props.setAlert("Please enter keyword", "danger");
        } else {
            this.props.searchUsers(this.state.keyword);
            this.setState({ keyword: "" })
        }
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group my-3 container">
                        <input type="text" value={this.state.keyword} onChange={this.onChange} className="form-control" placeholder="Go Profile" aria-describedby="button-addon2" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </form>
                {
                    this.props.showClearButton && <div className="btn btn-secondary btn-sm d-block mx-3" onClick={this.props.clearUsers} type="button">Clear Results</div>
                }
            </div>
        )
    }
}

export default Search
