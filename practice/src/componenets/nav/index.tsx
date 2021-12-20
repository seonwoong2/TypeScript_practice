import * as React from 'react';
import styled from 'styled-components';
import Logo from '../../resourse/maat-bab-logo-01.png';
import {
  StyledBackground,
  StyledLogo,
  StyledMenu,
  StyledLog,
  StyledButtonBox,
  StyledMenuA
} from './styles';

interface NavProps {
  name?: string;

}

const Nav: React.SFC<NavProps> = ({name}) => (
  <div>
    <StyledBackground>
      <StyledLogo src={Logo} />
      <StyledMenu>
        <StyledMenuA><a href='/main'>맞밥 약속 조회하기</a></StyledMenuA>
        <StyledMenuA><a href='myPromise'>나의 맞밥 약속보기</a></StyledMenuA>
        <StyledMenuA><a>맞밥 약속 만들기</a></StyledMenuA>
      </StyledMenu>
      <StyledButtonBox>
        <StyledLog>로그인</StyledLog>
        <StyledLog>로그아웃</StyledLog>
      </StyledButtonBox>

    </StyledBackground>
  </div>
);

export default Nav