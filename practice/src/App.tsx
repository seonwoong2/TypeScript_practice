import * as React from 'react';
import './App.css';
import Nav from './componenets/nav/index';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Landing from './componenets/landing/index';

const App = (): JSX.Element => {
  

    return (
      <div>
      <BrowserRouter>
              <Nav/>
        <Routes>
            <Route path='/' element={<Landing />}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
}

export default App;

