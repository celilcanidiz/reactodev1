import {useState, useEffect} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Footer2 from './Footer2';
import "../../App.css";

function ToDoList() {

const [todo, setTodo] = useState([]);
const [status, setStatus] = useState("");
const [filteredTodos, setFilteredTodos]= useState([]);

useEffect(() => {
  const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilteredTodos(todo.filter(item => item.completed === true))
      break;
    case 'active':
      setFilteredTodos(todo.filter(item => item.completed === false))
      break;
    default:
      setFilteredTodos(todo)
      break;
  }
}

  filterHandler()
}, [todo, status])

  return (
    <div>
    <div className='todoapp'>
    <Header addTodo={setTodo} todo={todo} />
    <Main filteredTodos={filteredTodos} todol={todo} deleteTodo={setTodo} status={status}/>    
    <Footer2 todoCount={todo} setTodo={setTodo} status={status} setStatus={setStatus}/>
    </div>
    <Footer/>
    </div>
  )
}

export default ToDoList