import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../resourse/maat-bab-logo-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../FontAwesome';

import {
  StyledLogo,
  StyledLog,
  StyledButtonBox,
  StyledMenuLi,
  StyledMenuA,
  StyledMenuIcon,
} from './styles';

const Nav = (): JSX.Element => {
const [isToggle, setIsToggle] = useState<Boolean>(false);

const StyledMenu = styled.ul`
display: flex;
list-style: none;
@media ${props => props.theme.tablet}{
  ${isToggle ? `display:flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40%;`: 'display:none;'}
}
@media ${props => props.theme.mobile}{
height: 100%;
margin-right: 32%;
margin-top:0;
}
`
const StyledBackground = styled.div`
width:100%;
height:70px;
background-color: #ffb800;
justify-content: space-between;
display: flex;
@media ${props => props.theme.tablet}{
  ${isToggle ? 'height: 200px;' : ''};
}
`



  const toggleHandler = (a:any) => {
    setIsToggle(!isToggle)
  }
  return(
  <div>
    <StyledBackground >
      <StyledLogo src={Logo} />
      <StyledMenu>
        <StyledMenuLi><StyledMenuA href='/main' >맞밥 약속 조회하기</StyledMenuA></StyledMenuLi>
        <StyledMenuLi><StyledMenuA href='/myPromise'>나의 맞밥 약속보기</StyledMenuA></StyledMenuLi>
        <StyledMenuLi><StyledMenuA href='/makeMeet'>맞밥 약속 만들기</StyledMenuA></StyledMenuLi>
        <StyledMenuLi>
          <StyledButtonBox>
            <StyledLog>로그인</StyledLog>
            <StyledLog>회원가입</StyledLog>
          </StyledButtonBox>
        </StyledMenuLi>
      </StyledMenu>
      <StyledMenuIcon onClick={(e) => toggleHandler(e)}><FontAwesomeIcon icon='hamburger'/></StyledMenuIcon>
    </StyledBackground>
  </div>
  )
};

export default Nav
