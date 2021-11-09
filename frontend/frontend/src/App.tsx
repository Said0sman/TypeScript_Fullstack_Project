import React from 'react';
import styled from "styled-components";


function App() {
  return (
    <CoverWrap>
        <SectionTwoColumns>
            <Article>
                <h1>React with TypeScript!</h1>
            </Article>
        </SectionTwoColumns>
    </CoverWrap>
  );
}
const CoverWrap = styled.div`
background-color: blanchedalmond;
`
const H1 = styled.h1 `
font-size: 2em;
`
const Article = styled.article `
padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  text-align: center;
  background-color: darkcyan;
`
const SectionTwoColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  padding: 0 1em 1em 1em;
  &:first-child {
    padding-top: 1em;
  }
`

export default App;
