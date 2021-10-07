import React, { Component } from 'react';
import {Link} from "react-router-dom"

class User extends Component {
   
    render() {
        const {login,avatar_url,html_url} = this.props.user;
        return (
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card mt-3">
                        <img src={avatar_url} className="img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <Link to={`/github-finder/user/${login}`} className="btn btn-primary btn-sm">Go Profile</Link>
                        </div>
                    </div>
                </div> 
        )
    }
}

export default User;