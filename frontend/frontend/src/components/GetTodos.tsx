import {useState} from "react";
import http from "../utils/api/ApisTodo";
import styled from "styled-components";


function GetTodos() {
    const initialServerStatus = 'Check server status'
    const [ text, setText] = useState<string>(initialServerStatus)

   //Request from Backend ALiveRoutes
    function alive() {
        http.get('/').then(function (res){
            console.log(res.data)
            setText(res.data)}).catch(
            function (error) {
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
            <h2>{text}</h2>
            <Button onClick={alive}>Get</Button>
            <Button onClick={()=> {setText(initialServerStatus)}}>Clear</Button>

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