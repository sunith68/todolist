import React from 'react'
import Item from './Item.js';

function List(props) {
    console.log(props);
    return (
        <div>
            Hello from list
            {props.tasks.map(task => <Item key={task.id} task={task} toggleTask={props.toggleTask} deleteTask={props.deleteTask}/>)}
        </div>
    )
}

export default List
