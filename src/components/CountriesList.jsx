import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList() {
  const [countries, setCountries] = useState([]);
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

  return (
    <div>
         <h1>List of Countries</h1>
        {countries.map((apt) => {
        return (
          <div key={apt._id}>
            <Link><img src={`https://flagpedia.net/data/flags/icon/72x54/${apt.alpha2Code.toLowerCase()}.png`} alt="countries" />
            <h3>{apt.name.official}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default CountriesList