import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Navbar extends Component{

    render(){
    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to="/github-finder" className="navbar-brand">
                        <i className={this.props.icon}></i>{this.props.text}
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/github-finder/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        )
    }
}

export default Navbar;
