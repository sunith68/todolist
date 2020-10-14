import React, { Component } from 'react'

class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newTask:''
        }
    }
    handleChange=(e)=>{
        this.setState({newTask: e.target.value});
    }
    handleClick=(e)=>{
        this.props.addTask(e,this.state.newTask);
    }

    render() {
        return (
            <div>
                <input value={this.state.newTask} onChange={this.handleChange} />
                <button onClick={this.handleClick} >Add</button>
            </div>
        )
    }
}
export default Add;