import {useState} from "react";
import http from "../utils/api/ApisTodo";
import styled from "styled-components";
import {TodoDataObject} from "../../../../backend/src/utils/interface/InterfaceTodos";
import {JsonToTable} from "react-json-to-table";


function GetTodoById() {
    const [ oneUser, setAllUser] = useState<TodoDataObject>()
    const [ id, setId] = useState<string>('617943c7542fec4485f31998')

    //Request from Backend ALiveRoutes
    function getTodoById() {
        http.get<TodoDataObject>(`/Todos/${id}`).then(function (res){
            console.log(res.data)
            setAllUser(res.data)
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
            <H1>Get User List with Id </H1>
            Id: <Input type='text' value={id} onChange={ event => setId(event.target.value)}/>
            <h2>{oneUser}</h2>
            <Button onClick={getTodoById}>Get</Button>
            <Button onClick={()=> setAllUser(undefined)}>Clear</Button>
            <JsonToTable json={oneUser}/>
        </Article>
    )
}
const Article = styled.article`
padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: lightblue;
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
export default GetTodoById