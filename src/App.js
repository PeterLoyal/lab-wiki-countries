// src/App.js
import './App.css';
import axios from 'axios';
import CountriesList from './components/CountriesList';
import { useState, useEffect } from 'react';
import Header from './components/Header';


const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);
  

  //function to call the api and set the state
  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      console.log(response);
      setCountries(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  return <div className="App">
    <Header />
    <CountriesList />
     {/* <h1>List of countries</h1>

{loading && <h2>Loading...</h2>}

{countries.map((apt) => {
  return (
    <div key={apt._id}>
      
      <h3>{apt.name.official}</h3>
      
    </div>
  );
})} */}
  </div>;
  
}
export default App;