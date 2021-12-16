import React,{useState} from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  const [content,setContent] = useState<String>('')
  let sendMessage:String = ''
  function change(text:any){
    setContent(text.target.value)
    console.log(content)
  }
  function shownumber(number:Number){
    return number
  }
  function hellowolrd(name:String){
    return sendMessage = 'hello' + name
  }
  const Messgae = styled.h1`
  color: black;
  `
  const Text = styled.textarea`
  width: 300px;
  height:30px;
  `
  const Button = styled.button`
  width: 100px;
  height: 40px;
  `
  return (
    <div className="App">
      <Text onChange={(e:any) => change(e)} />
      <Button onClick={() => hellowolrd}>클릭!</Button>
      <Messgae>{sendMessage}</Messgae>
    </div>
  );
}

export default App;