import {useState} from "react";
import http from "../utils/api/ApisTodo";
import styled from "styled-components";
import {JsonToTable} from "react-json-to-table";
import {TodoDataObject} from "../../../../backend/src/utils/interface/InterfaceTodos";


function GetTodos() {
    const initialState:  Array<TodoDataObject> =[]
    const [ allUserInDatabase, setAllUserInDatabase] = useState<Array<TodoDataObject>>(initialState)

   //Request from Backend ALiveRoutes
    function getTodos() {
        http.get<TodoDataObject[]>('/Todos').then(function (res){
            console.log(res.data)
            setAllUserInDatabase(res.data)
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
            <h2>{allUserInDatabase}</h2>
            <Button onClick={getTodos}>Get</Button>
            <Button onClick={()=> setAllUserInDatabase(initialState)}>Clear</Button>
<JsonToTable json={allUserInDatabase}/>
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