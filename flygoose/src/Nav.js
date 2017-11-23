import React, { Component } from 'react';
 import './Nav.css';
 import Bar from './Bar';
class Nav extends Component {
    render(){
        return (
            <nav className='Nav'>
                <Bar/>
            </nav>
        ) 
    }
}
export default Nav;