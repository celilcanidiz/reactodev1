import React from 'react'


function Main({todol,deleteTodo,filteredTodos}) {

	
  return (
    <div>
        <section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all" >
				Mark all as complete
			</label>

		<ul className="todo-list">
			{filteredTodos.map((todos,i) =>(
				<li className={todos.completed ? "completed":""} key={todos.id} >
					<div className="view">
						<input className="toggle" type="checkbox" onClick={ () => deleteTodo(todol.map(item=>(
						item.id === todos.id ? {...item, completed:!item.completed}:item
						)))

						}/>
						<label>{todos.text}</label>
						<button  onClick={()=>{
							deleteTodo(todol.filter(item => 
								item.id!==todos.id
							));
							
					
						}
					} className="destroy"> </button>
					</div>
				</li>
  			))}
			
		</ul>

		</section>
    </div>
  )
}

export default Main