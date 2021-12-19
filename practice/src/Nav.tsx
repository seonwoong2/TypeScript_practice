import * as React from 'react';
import styled from 'styled-components';
import Logo from './resourse/maat-bab-logo-01.png'
interface NavProps {
  name?: string;

}
const StyledBackground = styled.div`
width:100%;
height:70px;
background-color: #ffb800;
`
const StyledLogo = styled.img`
width: 50px;
height: 50px;
display: flex;
padding: 10px 0 0 5px;
`

const Nav: React.SFC<NavProps> = ({name}) => (
  <div>
    <StyledBackground>
      <StyledLogo src={Logo} />
      <ul>
      <li></li>
      <li></li>
      <li></li>
      </ul>

    </StyledBackground>
  </div>
);

export default Nav