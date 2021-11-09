import React from 'react';
import styled from "styled-components";
import Alive from  './components/Alive'
import GetTodos from './components/GetTodos'
import GetTodoById from './components/GetTodoById'
import CreateTodos from './components/CreateTodos'
import UpdateTodos from './components/UpdateTodos'
import DeleteTodos from './components/DeleteTodos'




function App() {
  return (
    <CoverWrap>
        <SectionTwoColumns>
            <Article>
                <H1>React with TypeScript!</H1>
            </Article>
            <Alive/>
        </SectionTwoColumns>
        <SectionTwoColumns>
            <GetTodos/>
            <GetTodoById/>
        </SectionTwoColumns>
        <SectionThreeColumns>
            <CreateTodos/>
            <UpdateTodos/>
            <DeleteTodos/>
        </SectionThreeColumns>

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

const SectionThreeColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  padding: 0 1em 1em 1em;
`
export default App;
