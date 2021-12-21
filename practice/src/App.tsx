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
    <div>
      <Nav/>
 
    </div>
  );
}

export default App;