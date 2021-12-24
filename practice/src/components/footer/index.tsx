import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
StyledBackground,
StyledContentsBox,
StyledExplain,
StyledGithup,
StyledA
 } from './styles'

const index = (): JSX.Element => {
    const githubpage = () => {

    }
 
    return (
   <StyledBackground>
     <StyledContentsBox>
        <StyledExplain>Refactoring © 2021 all rights reserved by SeonWoong</StyledExplain>
        <StyledGithup><StyledA href='https://github.com/seonwoong2/TypeScript_practice'><FontAwesomeIcon icon={['fab', 'github']}/>SEONWOONG2</StyledA></StyledGithup>
     </StyledContentsBox>
    </StyledBackground>
    )
}

export default index
