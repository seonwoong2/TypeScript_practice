import * as React from 'react';
import './App.css';
import styled from "styled-components";
import Nav from './componenets/nav/index';

function App() {

  const StyledButton = styled.button`
  width: 50px;
  hegith: 30px;
  `;
  
  
  return (
    <div className="App">
      <Nav name='이선웅'/>
    </div>
  );
}

export default App;