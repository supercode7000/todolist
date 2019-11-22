import React from 'react';

const TodoItem = (props) => {
    return (
        <article>
            <input
                type="checkbox"
                name=""
                className="checkbox"
                checked={props.todo.isComplete}
                onChange={() => props.handleCheckBox(props.todo.id)}
            />
            <label htmlFor="" className="todo">{props.todo.todo} </label>
            <button className="button" onClick={() => props.deleteItem(props.todo.id)}>&times;</button>
        </article>
    );
}

export default TodoItem;