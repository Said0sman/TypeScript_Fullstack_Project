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
            <H1>List From Todos</H1>
            <h2>{allUserInDatabase}</h2>
            <Button onClick={getTodos}>Get</Button>
            <Button  onClick={()=> setAllUserInDatabase(initialState)}>Clear</Button>
<JsonToTable json={allUserInDatabase}/>
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
 export default GetTodos