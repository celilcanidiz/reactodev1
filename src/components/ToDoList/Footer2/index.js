import React from 'react'
import {useState} from 'react'

function Footer2({todoCount, setTodo, status, setStatus}) {

	const unCompleted= todoCount.filter(item=>item.completed==false)

	const clearCompleted= (e)=>{
		// e.preventDefault()
		setTodo(unCompleted);
		}

  return (
    
        <footer className="footer">
		    <span className="todo-count">
			<strong>{unCompleted.length} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a onClick={()=> {
					setStatus("all");
				}}>All</a>
			</li>
			<li>
				<a onClick={()=>{
					setStatus("active");
				}}>Active</a>
			</li>
			<li>
				<a onClick={()=>{
					setStatus("completed");
				}}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed"  onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
    
  )
}

export default Footer2