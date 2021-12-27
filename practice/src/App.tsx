import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav/index';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/landing/index';
import Footer from './components/footer/index';
import LoginModal from './modal/login/index';

const App = (): JSX.Element => {
  const [ismodal, setIsmodal] = useState<boolean>(true)

    return (
      <div>
      <BrowserRouter>
        {ismodal ? <LoginModal ismodal={ismodal} setIsmodal={setIsmodal} /> : null}
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

