import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Styledbackground,
  StyledContainer,
  StyledClose,
  StyledTitle,
  StyledSubhead,
  StyledInputBox,
  StyledInput,
  SytledLoginBt,
  StyledA,
} from './styles'

function Index({...props}): JSX.Element {
  
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<boolean>(false);


  const StyledMailErr = styled.div`
  display:${emailErr ? 'block' : 'none'};
  color: red;
  `;

  const StyledPasswordErr = styled.div`
  display: ${passwordErr ? 'block' : 'none'};
  color: red;
  `;


  

  const closeHandler = (e:any) => {
    props.setIsmodal(false)
  }
    return (
    <Styledbackground>
      <StyledContainer>
        <StyledClose onClick={(e) => closeHandler(e)}>X</StyledClose>
        <StyledTitle>로그인</StyledTitle>
        <StyledInputBox>
          <StyledSubhead>E-mail</StyledSubhead>
          <StyledInput type='email' placeholder='이메일을 입력해 주세요' />
          <StyledMailErr>이메일 형식이 올바르지 않습니다.</StyledMailErr>
          <StyledSubhead>비밀번호</StyledSubhead>
          <StyledPasswordErr>비밀번호를 다시 입력해주세요</StyledPasswordErr>
          <StyledInput type='password' placeholder='비밀번호를 입력해 주세요' />
          <SytledLoginBt>로그인</SytledLoginBt>
          <StyledA href='/signup' onClick={(e) => closeHandler(e)}>회원이 아니신가요?</StyledA>
          <SytledLoginBt>카카오(임시)</SytledLoginBt>
          <div><SytledLoginBt>구글(임시)</SytledLoginBt></div>
        </StyledInputBox>
      </StyledContainer>
    </Styledbackground>
  )
}

export default Index
