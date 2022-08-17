import { List, Container } from "@mui/material"
import { useState } from "react"
import Form from "../Form"
import TodoItem from "../TodoItem"

const Home = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        console.log(todo)
        setTodos([...todos,todo]);
    }

    const deleteTodo = (id) => {
        console.log(id);
        console.log(todos);
        var filtered = todos.filter((todo) =>  todo.id !== id);
        console.log(filtered);
        setTodos(filtered);
    }


    return(
        <Container maxWidth="xs">
        <Form addTodo={addTodo}/>
        <List sx={{width:'100%', marginTop:'10px' }}>
            {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
 
            ))}

        </List>
        </Container>
    )
}

export default Home