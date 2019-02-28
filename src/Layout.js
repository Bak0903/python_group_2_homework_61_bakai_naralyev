import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import './Layout.css';


class Layout extends Component {
    render() {
        return <div className='App'>
            <ul>
                <li><NavLink to='/' className="nav-link">Main</NavLink></li>
                <li><NavLink to='/lotto' className="nav-link">Lotto</NavLink></li>
                <li><NavLink to='/boxes' className="nav-link">Boxes</NavLink></li>
            </ul>
            <div>
                {this.props.children}
            </div>
        </div>;
    }
}


export default Layout;