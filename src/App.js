import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'; 

export default function App() {

  const [cities, setCities] = useState([]);

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(ans => ans.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const new_city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          setCities(oldCities => [...oldCities, new_city]);

        } else {
          alert('Ciudad no encontrada');
        }


      })
  }

  function onClose (id){ 
    setCities(oldCities => oldCities.filter(nombre => nombre.id !== id))
  }

  return (
    <div className="App">
      <div>
      <Nav onSearch={onSearch} />
      </div>
      <div>
      <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}
