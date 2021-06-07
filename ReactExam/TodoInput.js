import React , {useState} from 'react';
import TodoList from './TodoList';

const TodoInput = () => {

    let [list,setList] = useState([]);

    let [inp,setInp] = useState('');

    const writeInput = (e) => {
        setInp(e.target.value)
    }

    const itemInsert= () => {
        let newInsert = [...list];
        newInsert.unshift(inp);
        setList(newInsert);
        console.log(list);
    }

    return (
        <div className="todoinput">
            <input onChange={writeInput}/><button onClick={itemInsert}>추가</button>
            <TodoList list={list}/>
        </div>
    )
}

export default TodoInput;