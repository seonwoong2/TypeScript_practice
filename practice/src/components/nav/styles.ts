import styled from 'styled-components';

export const StyledLog = styled.button`
background-color: white;
border: none;
width: 80px;
height: 30px;
border-radius: 20px;
margin-right: 5px;
font-weight: bold;
font-size: 15px;
&:hover{
  cursor:pointer;
}
@media ${props => props.theme.tablet} {
margin-top: 5px;
}
`
export const StyledMenuIcon = styled.div`
  display:none;
  @media ${props => props.theme.tablet}{
    display:flex;
    position: absolute;
    right: 5px;
    top: 20px;
    font-size:35px;
    height:35px;
    &:hover {
    cursor:pointer;
  }
    
  }
 `

export const StyledLogo = styled.img`
width: 50px;
height: 50px;
display: flex;
padding: 10px 0 0 5px;
`
export const StyledMenuLi = styled.li`
padding: 8px 12px;
text-align: center;
`
export const StyledMenuA = styled.a`
text-decoration:none;
font-weight: bold;
color: black;
@media ${props => props.theme.mobile}{
  font-size: 13px;
}
`
export const StyledButtonBox = styled.div`
display: flex;
@media ${props => props.theme.tablet}{
  flex-direction: column;
  align-items: center;
}

`
