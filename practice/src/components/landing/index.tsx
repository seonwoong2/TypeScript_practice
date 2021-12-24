import React, { Component } from 'react'
import styled from 'styled-components';
import data from '../../resourse/landingData';
import Slide from '../landingSlide/index';

import { 
StyledBackground
} from './styles'
const index = (): JSX.Element => {


    return (
       <StyledBackground>
        <Slide text={data[0].text} imgsrc={data[0].image} />
       </StyledBackground>
    )
}

export default index
