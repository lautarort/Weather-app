/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
 import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';

export default function Nav ({onSearch}){
  return (
      <nav className={styles.nav}>
          <div className="container-fluid">
              <div className="d-flex align-items-center">
                  <img src={Logo} className={styles.logo} alt="logo Henry" srcset="" />
                  <a className={styles.brand} href="http://github.com/anaharri">LRT</a>
              </div>
              <SearchBar className={styles.sb} onSearch={onSearch}/>
          </div>
      </nav>
  )
}
