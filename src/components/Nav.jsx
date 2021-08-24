import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">LRT Climate</a>
    <SearchBar onSearch={onSearch}/>
    <img src={Logo} alt={"Henry"}/>
  </nav>
  );
};

export default Nav;
