import * as React from 'react';
import './App.css';
import styled from "styled-components";
import Nav from './Nav';

function App() {

  const StyledButton = styled.button`
  width: 50px;
  hegith: 30px;
  `;
  
  
  return (
    <div className="App">
      <Nav name='이선웅'/>
      <StyledButton>안녕하세요</StyledButton>
    </div>
  );
}

export default App;