import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setcountriesPerPage] = useState(10);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true)
      const res = await axios.get('https://restcountries.eu/rest/v3.1/all');
      setCountries(res.data)
      setLoading(false)
    }
    getCountries();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={ countries } loading={ loading } />
      
    </div>
  );
}

export default App;
