import Axios from "axios";

const hostUrl = process.env.REACT_APP_SERVER_URL
const port = process.env.REACT_APP_SERVER_PORT
const url = `${hostUrl}:${port}`

const TodosApi = Axios.create({
    baseURL: url
})

export default TodosApi