import * as React from 'react';
import './App.css';
import Nav from './components/nav/index';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/landing/index';
import Footer from './components/footer/index';

const App = (): JSX.Element => {
  

    return (
      <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    )
}

export default App;

