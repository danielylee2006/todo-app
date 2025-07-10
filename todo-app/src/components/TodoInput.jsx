import { useState } from "react";

export function TodoInput(prop) {
  const { handleAddTodo } = prop;
  const [inputValue, setInputValue] = useState(""); //search bar

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Add Tasks"
      />
      <button onClick={() => {
        if(!inputValue) {return} //guard clause
        handleAddTodo(inputValue) 
        setInputValue('')
      }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
