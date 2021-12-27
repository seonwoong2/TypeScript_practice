import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import data from '../../resourse/landingData';
import Slide from '../landingSlide/index';
import SwiperCore from 'swiper';
import { 
StyledBackground
} from './styles';

const Index = (): JSX.Element => {

  const [pick, setPick] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if(pick === 2){
        setPick(0)
      }else{
        setPick(pick + 1)
      }
    }, 5000);
  }, [pick])

    return (
       <StyledBackground>
        <Slide text={data[pick].text} imgsrc={data[pick].image} />
       </StyledBackground>
    )
}

export default Index
