import styled from 'styled-components';

export const Styledbackground = styled.div`
display:flex;
width: 100%;
height:100%;
background-color: rgba( 47, 138, 241, 0.1);
position: fixed;
padding:5% 30%;
`

export const StyledContainer = styled.section`
width: 500px;
height: 700px;
border: 3px solid #ffa512;
background-color: white;
border-radius: 15px;
`
 export const StyledClose = styled.div`
 display:flex;
 width: 20px;
 height: 20px;
 font-weight: bold;
 font-size: 20px;
 float: right;
 justify-content: end;
 &:hover{
   cursor:pointer;
 }
 `
 export const StyledTitle = styled.h1`
 color: #ffa512;
 text-align: center;
 `

 export const StyledSubhead = styled.div`
 color: gray;
 font-size: 25px;
 height: 30px;
 font-weight: bold;
 margin-top: 15px;
 `
 
 export const StyledInputBox = styled.div`
 border: 1px solid black;
 width: 400px;
 height: 500px;
 margin: 0 9%;
 /* display:flex; */
 text-align: center;
 `
 export const StyledInput = styled.input`
 width: 300px;
 height: 30px;
 border: 2px solid gray;
 border-radius: 15px;
 margin-top: 3%;
 padding-left: 10px;
 outline:none;
 &:focus{
   border-color: #ffa512;
 }
 `

 export const SytledLoginBt = styled.button`
 border: 3px solid #ffa512;
 width: 140px;
 height: 35px;
 background:none;
 border-radius: 20px;
 font-weight: bold;
 font-size: 20px;
 margin-top: 15px;
 &:hover{
   background-color: #ffa512;
   cursor:pointer;
 }
 `