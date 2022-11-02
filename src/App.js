import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import requests from './Helpers/requests';
import Results from './components/Results/Results';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className='app'>
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
};

export default App;
