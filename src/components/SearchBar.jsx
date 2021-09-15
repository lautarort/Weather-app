import React, {useState} from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  const [param, setParam] = useState("")
  return (
    <form onSubmit= {e => {
      e.preventDefault()
      onSearch(param)
      setParam('')
    }}>
      <input className={styles.searchBar} value={param} type='text' placeholder='Ciudad...' onChange={e => setParam(e.target.value)}/>
      <input className={styles.searchBtn} type="submit" value='Agregar'/>
  </form>  
  )
};
