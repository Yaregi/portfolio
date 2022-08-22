import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Sc from './Sc';



const iframePrivacyPart = () => {

}


function App() {
  return (


    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;


