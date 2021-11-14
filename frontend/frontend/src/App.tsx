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
            <GetTodos/>
            <GetTodoById/>
           <DeleteTodos/>
        </SectionTwoColumns>
          <SectionTwoColumns>

          </SectionTwoColumns>

        <SectionThreeColumns>
            <CreateTodos/>
            <UpdateTodos/>
        </SectionThreeColumns>

    </CoverWrap>
  );
}
const CoverWrap = styled.div`
 background-image: url(https://wallpaperaccess.com/full/1988028.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 16em;
`
const SectionTwoColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  padding: 0;
  &:first-child {
  }
`

const SectionThreeColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  grid-gap: 1em;
  padding: 0;
`
export default App;
