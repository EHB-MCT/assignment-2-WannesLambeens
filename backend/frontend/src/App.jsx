import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
// import DataList from './components/DataList.jsx';
import DataList from './components/DataList.jsx';
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <DataList />
      <Form />
      <h1>Mijn Frontend</h1>
      <p>Welkom bij mijn applicatie!</p>
    </div>
  );
};


export default App;
