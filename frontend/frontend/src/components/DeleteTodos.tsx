import {useState} from "react";
import http from "../utils/api/ApisTodo";
import styled from "styled-components";

function DeleteTodos() {
    const [id, setId] = useState<string>('')
    const [text, setText] = useState<string>('')


    function deleteTodos () {
        http.delete(`/Todos/${id}` ).then(function (res){
            console.log(res.data)
            setText(res.data.message)
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
            <H1>Delete User in List</H1>
            <div>Id:<Input type='text' value={id} onChange={event => setId(event.target.value)}/></div>
            <div><Button onClick={deleteTodos}>Delete</Button>
                <Button onClick={()=> setText('')}>Clear</Button> </div>
            <p>{text}</p>
        </Article>
    )
}
const Article = styled.article`
padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: cornflowerblue;
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


export default DeleteTodos