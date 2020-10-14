import React from 'react'
import './stylesheets/styles.css'

function Item(props){
    let className= props.task.completed ? 'finished' : '';
    // let className='finished';
    console.log(props.task.completed)
    return (
        <div>
            <h3 className={className} onClick={e => props.toggleTask(e,props.task.id)}>{props.task.todo}</h3>
            <span onClick={e=> props.deleteTask(e,props.task.id)}>Delete</span>
        </div>
    )
}

export default Item;