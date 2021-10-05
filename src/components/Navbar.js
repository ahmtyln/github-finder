import React, { Component } from 'react'

class Navbar extends Component{

    render(){
    return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <i className={this.props.icon}></i>{this.props.text}
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;
