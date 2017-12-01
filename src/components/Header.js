import React from 'react';
import '../css/Header.css';

const Header = (props) => { 
  console.log(this)
  return (
    <div className="sdv">
    <header className="sdv-header">
    <h2 className="title">{props.title}</h2>
    </header>
    </div>
  );
}


export default Header;
