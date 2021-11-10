import {useState} from "react";
import http from "../utils/api/ApisTodo";
import styled from "styled-components";
import {CreateTodoObject, TodoDataObject} from "../../../../backend/src/utils/interface/InterfaceTodos";
import {JsonToTable} from "react-json-to-table";


function UpdateTodos() {
    const [id, setId] = useState<string>('')
    const [userObject, setUserObject] = useState<TodoDataObject>()
    const [userName, setUserName] = useState<string>('Name')
    const [passWord, setPassWord] = useState<string>('NewSecretPassword')



    function updateTodos () {
        const payload: CreateTodoObject = {
            username: userName,
            password: passWord,
        }



        http.put(`/Todos/${id}`, payload ).then(function (res){
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
            <H1>Update User in List</H1>
            <div>Id:<Input type='text' value={id} onChange={event => setId(event.target.value)}/></div>
            <div>Username:<Input type='text' value={userName} onChange={event => setUserName(event.target.value)}/></div>
            <div>Password:<Input type='text' value={passWord} onChange={event => setPassWord(event.target.value)}/></div>
            <div><Button onClick={updateTodos}>Create </Button>
                <Button onClick={()=> setUserObject}>Clear</Button> </div>
            <JsonToTable json={userObject}/>
        </Article>
    )
}
const Article = styled.article`
padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: indianred;
`
const H1 = styled.h1`
font-size: 2em;
`
const Input = styled.input `  
    width: 200px; 
`

const Button = styled.button`
padding: 0.75em;
  border-radius: 1em;
  background-color: chocolate;
  color: aquamarine;
  border-color: chartreuse;

  &:hover {
    background-color: chocolate;
    color: chartreuse;
    border-color: aquamarine;
  }
`


export default UpdateTodos