import React from 'react';
import TodoInput from './TodoInput';

const TodoTemplate = () => {
    return (
        <div className="header">
            <h1>To do List</h1>
            <TodoInput/>
        </div>
    )
}

export default TodoTemplate;