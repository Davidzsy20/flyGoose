import React, { Component } from 'react';
 import './Nav.css';
 import Bar from './Bar';
 import 'materialize-css';
 import 'materialize-css/dist/css/materialize.min.css';
class Nav extends Component {
    render(){
        return (
            <nav className='Nav'>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Students</a></li>
        <li><a href="badges.html">Class</a></li>
        <li><a href="collapsible.html">About</a></li>
        </ul>
                {/* <Bar/>  */}
                </div>
            </nav>
        ) 
    }
}
export default Nav;