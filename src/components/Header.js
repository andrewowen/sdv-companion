import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
  	console.log(this)
    return (
      <div className="sdv">
        <header className="sdv-header">
          <h2 className="title">{this.props.title}</h2>
        </header>
      </div>
    );
  }
}

export default Header;
