import React from 'react';
import TodoInput from './TodoInput';

const TodoHeader = () => {
    return (
        <div className="header">
            <h1>To do List</h1>
            <TodoInput/>
        </div>
    )
}

export default TodoHeader;