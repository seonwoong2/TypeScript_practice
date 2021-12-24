import React from 'react';
import styled from 'styled-components';
import { 
StyledBackground,
StyledExplain,
StyledGif,
StyledImgContainer,
 } from './styles';

type indexProps = {
  text: string;
  imgsrc: string;
};

const index: React.FC<indexProps> = ({ text, imgsrc }) => (
      <StyledBackground>
        <StyledExplain>{text}</StyledExplain>
        <StyledImgContainer>
           <StyledGif src={imgsrc}/>
        </StyledImgContainer>
      </StyledBackground>
);

export default index;