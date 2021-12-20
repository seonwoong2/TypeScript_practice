import styled from 'styled-components';

export const StyledBackground = styled.div`
width:100%;
height:70px;
background-color: #ffb800;
justify-content: space-between;
display: flex;

`
export const StyledLogo = styled.img`
width: 50px;
height: 50px;
display: flex;
padding: 10px 0 0 5px;
`
export const StyledMenu = styled.ul`
display: flex;
list-style: none;
justify-content:space-between;

`
export const StyledMenuA = styled.li`
padding: 8px 12px;

`
export const StyledButtonBox = styled.div`
display: flex;
padding-top: 15px;
`
export const StyledLog = styled.button`
background-color: white;
border: none;
width: 80px;
height: 40px;
border-radius: 20px;
margin-right: 5px;
@media ${props => props.theme.tablet} {
  background-color: red;
}
`