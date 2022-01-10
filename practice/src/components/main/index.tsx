import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {
  Styledbackground,
  Styledsubtitle1,
  Styledtitlebox,
  Styledsubtitle2,
  Styledoptiontitle,
  StyledSelect,
  StyledMapBox,
} from './stylests';

const Index = (): JSX.Element => {
   
  const Styledoptionbox = styled.div`
  border: 1px solid black;
  width: 900px;
  height: 70px;
  display:flex;
  align-items:center;
  justify-content: space-evenly;
  `

    return (
      <Styledbackground>
        <Styledtitlebox>
          <Styledsubtitle1>맞밥 약속 조회하기🍳</Styledsubtitle1>
          <Styledsubtitle2>맞밥 약속 목록🍴</Styledsubtitle2>
        </Styledtitlebox>
        <Styledoptionbox>
          <Styledoptiontitle>맞밥 지역</Styledoptiontitle>
          <StyledSelect>
            <option>시/도 선택</option>
          </StyledSelect>
        </Styledoptionbox>
        <StyledMapBox>
          
        </StyledMapBox>
      </Styledbackground>
    )
}

export default Index
