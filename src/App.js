import React, { Component } from 'react';
// import logo from './logo.svg';
import List from './components/List.js';
import './App.css';
import Add from './components/Add.js';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 tasks : [
				 {
					 id : 1,
					 todo : "Have breakfast",
					 completed : false
				 },
				 {
					id : 2,
					todo : "Perform a second task",
					completed : false
				},
				{
					id : 3,
					todo : "Do homework",
					completed : false
				},
				{
					id : 4,
					todo : "Take a break",
					completed : false
				}		
			 ]
		}
	}
	toggleTask= (e,id) =>{
		this.setState({
			tasks: this.state.tasks.map((task)=>{
				if(task.id===id)task.completed=(!task.completed);
				return task;
			})
		})
	}
	deleteTask= (e,id)=> {
		this.setState({
			tasks: this.state.tasks.filter(task => task.id!==id)
		})
	}
	addTask= (e,todo)=>{
		let temp=this.state.tasks;
		temp.push({
			id:temp.length+1,
			todo:todo,
			completed:false
		})
		this.setState({
			tasks:temp
		})
	}
	render(){
	  return (
			<div className="App">
				<h1>Todo List</h1>
				<Add addTask={this.addTask} />
				<List 
					tasks={this.state.tasks} 
					toggleTask={this.toggleTask}
					deleteTask={this.deleteTask}
				/>
			</div>
  	);	
	}

}

export default App;
