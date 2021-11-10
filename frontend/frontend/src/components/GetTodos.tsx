import {useState} from "react";
import http from "../utils/api/ApisTodo";
import styled from "styled-components";
import {JsonToTable} from "react-json-to-table";
import {Todo} from "../../../../backend/src/utils/interface/InterfaceTodos";


function GetTodos() {
    const initialState:  Array<Todo> =[]
    const [ allTodosInDatabase, setAllTodosInDatabase] = useState<Array<Todo>>(initialState)

   //Request from Backend ALiveRoutes
    function getTodos() {
        http.get<Todo[]>('/Todos').then(function (res){
            console.log(res.data)
            setAllTodosInDatabase(res.data)
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
            <H1>Todos List From Database</H1>
            <h2>{allTodosInDatabase}</h2>
            <Button onClick={getTodos}>Get</Button>
            <Button onClick={()=> setAllTodosInDatabase(initialState)}>Clear</Button>
<JsonToTable json={allTodosInDatabase}/>
        </Article>
    )
}
const Article = styled.article`
padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: mediumaquamarine;
`
const H1 = styled.h1`
font-size: 2em;
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
 export default GetTodos