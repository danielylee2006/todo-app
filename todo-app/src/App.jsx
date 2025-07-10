import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import {useState, useEffect} from 'react'

function App() {

  //stateful variable for the todo list
  const [todos, setTodos] = useState([ 
    {input: 'Do this', complete: true}
  ])

  //stateful variable for the current selected tab (open is set as default)
  const [selectedTab, setSelectedTab] = useState('All') 


  /*
  In React, the useState hooks (react state variable) are immutable. For example, the 
  React State array created by a useState hook cannot be edited. In order to make changes 
  to it, we instead make a copy of it to make changes.
  */
  function handleAddTodo(newTodo) { 
    //create copy of todos and append the new todo at the end.
    const newTodoList = [...todos, {input: newTodo, complete: false}];
    setTodos(newTodoList) //set this new list as the current state variable
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = newTodoList[index] //get selected todo 
    completedTodo['complete'] = true; //change its complete status
    newTodoList[index] = completedTodo //change the todo at the index as the completedTodo which has been modified
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => valIndex !== index)
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
  }

  useEffect(() => { //this hook runs when the DOM is mounted
    if(!localStorage || !localStorage.getItem('todo-app')) {return} 
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos}/> {/*Pass in information like arguments */}
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  );
}

export default App;
