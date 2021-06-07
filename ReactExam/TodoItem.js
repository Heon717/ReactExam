import React from 'react';
import './css/TodoItem.css';

const TodoItem = (props) => {

    return (
        <div className="item">
            {props.item}
        </div>  
    )
}

export default TodoItem;