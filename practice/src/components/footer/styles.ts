import styled from 'styled-components';

export const StyledBackground = styled.div`
display: flex;
background-color: #fffade;
width:100%;
height: 60px;
justify-content: center;
`

export const StyledContentsBox = styled.div`
display:flex;
width: 100%;
height: 100%;
align-items: center;
justify-content: space-between;
`

export const StyledExplain = styled.div`
display:inline-block;
width: 480px;
font-size: 20px;
color: lightgray;
@media ${props => props.theme.tablet}{
  font-size: 18px;
  width: 450px;
}
@media ${props => props.theme.mobile}{
  font-size: 15px;
  width: 200px;
}
`
export const StyledGithup = styled.div`
display: flex;
width: 200px;
font-size: 23px;
font-weight: bold;
color: black;
@media ${props => props.theme.tablet}{
  font-size: 20px;
  width:200px;
}
@media ${props => props.theme.mobile}{
  font-size: 15px;
  width: 130px;
}
`
export const StyledA = styled.a`
text-decoration:none;
color: black;
`