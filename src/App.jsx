import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Fotter from './components/Fotter/Fotter';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>
        <Header/>
        <Body/>
        <Fotter/>
    </Layout>
  );
}

export default App;
