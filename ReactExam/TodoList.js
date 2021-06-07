import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    
    return (
        <div>
            {props.list.map((a,i)=>{
                <TodoItem item={props.list[i]}/>
            })}
        </div>
    )
}

export default TodoList;