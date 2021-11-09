import React from 'react';
import styled from "styled-components";


function App() {
  return (
    <CoverWrap>
   <h1>React with TypeScript!</h1>
    </CoverWrap>
  );
}
const CoverWrap = styled.div`
background-color: khaki;
`
const H1 = styled.h1 `
font-size: 2em;
`


export default App;
