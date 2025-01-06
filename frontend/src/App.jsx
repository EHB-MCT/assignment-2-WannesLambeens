import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
// import DataList from './components/DataList.jsx';
import DataList from './components/DataList.jsx';
import Form from './components/Form.jsx';

const App = () => {
  return (
    <div>

      <h1>Voetbaldagboek</h1>

      <DataList />
      <Form />
    </div>
  );
};


export default App;
