import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Main from './pages/Main';
import Header from './components/header/Header';

function App () {

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
