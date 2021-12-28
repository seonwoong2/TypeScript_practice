import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav/index';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/landing/index';
import Footer from './components/footer/index';
import LoginModal from './modal/login/index';
import SignUp from './components/signup/index';
const App = (): JSX.Element => {
  const [ismodal, setIsmodal] = useState<boolean>(false)

    return (
      <div>
      <BrowserRouter>
        {ismodal ? <LoginModal ismodal={ismodal} setIsmodal={setIsmodal} /> : null}
        <Nav setIsmodal={setIsmodal}/>
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
        <Routes>
          <Route path='signup' element={<SignUp />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    )
}

export default App;

