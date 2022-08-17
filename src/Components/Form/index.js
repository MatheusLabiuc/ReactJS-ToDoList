import {ButtonStyle, InputStyle } from '../StyledComponents'
import './Form.css'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';


const Form = ({addTodo}, props) => {
    const [text, setText] = useState(null)
    const [id, setId] = useState(0);



    const todoCreate = (text) => {
        const todoObj = {text: text, id: id}
        setId(id + 1);
        addTodo(todoObj);
    }



    return(
        <div className='content'>
            <h1>LISTA DE TAREFAS</h1>
            <InputStyle
             placeholder='Digite uma nova tarefa...'
             onChange={(e) => setText(e.target.value)}
             />
            <ButtonStyle onClick={() => todoCreate(text)}>
                <AddIcon/>
            </ButtonStyle>
        </div>

    
    )
}

export default Form