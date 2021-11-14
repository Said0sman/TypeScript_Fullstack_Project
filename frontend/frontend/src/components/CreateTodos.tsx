import {useState} from "react";
import http from "../utils/api/ApisTodo";
import styled from "styled-components";
import {CreateTodoObject, TodoDataObject} from "../../../../backend/src/utils/interface/InterfaceTodos";
import {JsonToTable} from "react-json-to-table";

function CreateTodos() {
    const [userObject, setUserObject] = useState<TodoDataObject>()
    const [userName, setUserName] = useState<string>('Text')
    const [passWord, setPassWord] = useState<string>('Day')



function createTodos () {
   const payload: CreateTodoObject = {
       username: userName,
       password: passWord,
   }



    http.post('/Todos/', payload ).then(function (res){
        console.log(res.data)
        setUserObject(res.data)
    }).catch(function (error) {
        console.log(error)
        return 'Error'
    })
        .then(function () {
            // will always run
        })
}
return (
    <Article>
        <H1>Create Todos in List</H1>
       <div>
           <Input type='text' value={userName} onChange={event => setUserName(event.target.value)}/>
       </div>
        <div>
            <Input type='text' value={passWord} onChange={event => setPassWord(event.target.value)}/>
        </div>

       <div>
           <Button onClick={createTodos}>Create</Button>
           <Button onClick={()=> setUserObject}>Clear</Button>
       </div>
        <JsonToTable json={userObject}/>
    </Article>
)
}
const Article = styled.article`
padding: 1px;
  border-style: none;
`
const H1 = styled.h1`
  font-size: 2em;
  font-family: Andalus;
  color: rgba(239, 175, 141, 0.78);
`
const Input = styled.input `
  width: 200px;
  background-color: rgba(229, 200, 193, 0.56);
  padding: 0.75em;
  margin: 0.75em;
  font-size: 0.75em;
  font-weight: bold;;
  border-radius: 0.75em;

  &:hover {
    background-color: rgba(250, 247, 242, 0.75);
    color: indianred;
    border-color: rgba(236, 164, 46, 0.63);
  }
`

const Button = styled.button`
  padding: 0.75em 0.75em 0.75em 1em;
  margin: 1em;
  font-size: 1rem;
  background-color: rgba(239, 175, 141, 0.6);
  color: rgba(34, 30, 80, 0.68);
  border-color: rgba(34, 30, 80, 0.41);
  font-weight: bold;;
  border-radius: 0.75em;

  &:hover {
    background-color: rgba(250, 247, 242, 0.75);
    color: indianred;
    border-color: rgba(236, 164, 46, 0.63);
  }
`
export default CreateTodos