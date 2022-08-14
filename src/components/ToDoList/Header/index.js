import React, {useState} from 'react';

function Header({addTodo,todo}) {

  const [form, setForm] = useState("");
  const onChangeInput = (e) => {
    setForm(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();

    addTodo([...todo, {text:form, completed:false, id:Math.random()*1000,}]);

    setForm("");
  }

  return (
    <div>
        
      <header className="header">
		    <h1>todos</h1>
        
		    <form onSubmit={onSubmit} >
        <div>
			    <input value={form} name='nt' className="new-todo" placeholder="What needs to be done?" autoFocus onChange={onChangeInput}/>
        </div>  
		    </form>
        
	    </header>
        
    </div>
  )
}

export default Header