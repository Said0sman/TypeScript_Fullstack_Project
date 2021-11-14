import {useState} from "react";
import http from "../utils/api/ApisTodo";
import styled from "styled-components";

function DeleteTodos() {
    const [id, setId] = useState<string>('ID:')
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
            <H1>Delete from List</H1>
            <div><Input type='text' value={id} onChange={event => setId(event.target.value)}/></div>
            <div><Button onClick={deleteTodos}>Delete</Button>
                <Button onClick={()=> setText('')}>Clear</Button> </div>
            <P>{text}</P>
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
  color: rgb(239, 175, 141);
`
const P = styled.p`
  font-size: 2em;
  font-family: Andalus;
  color: rgb(239, 175, 141);
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
  padding: 0.75em 0.75em;
  margin: 1em;
  font-size: 0.75em;
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


export default DeleteTodos