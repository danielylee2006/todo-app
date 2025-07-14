import { useState } from "react";

export function TodoInput(prop) {
  const { handleAddTodo } = prop;
  const [inputValue, setInputValue] = useState(""); //search bar

  function addTodo() {
    if(!inputValue) return; //guard clause
    handleAddTodo(inputValue);
    setInputValue("");
  }

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => {
          if(event.key === "Enter") {addTodo()}
        }}
        placeholder="Add Tasks"
      />
      <button onClick={() => {addTodo()}}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
