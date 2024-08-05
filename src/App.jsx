import { useState } from "react";
import "./App.css";

export default function App() {
  const [todoLists, setTodoLists] = useState([
    {
      id: "1",
      label: "label 1",
    },
    {
      id: "2",
      label: "label 2",
    },
    {
      id: "3",
      label: "label 3",
    },
    {
      id: "4",
      label: "label 4",
    },
    {
      id: "5",
      label: "label 5",
    },
  ]);
  
  const handleUpArrow = (todoId) => {
    const index = todoLists.findIndex((todo) => todo.id === todoId)
    const newArray = [...todoLists];
    const temp = newArray[index];
    newArray[index] = newArray[index - 1];
    newArray[index - 1] = temp;
    setTodoLists(newArray);
  };

  const handleDownArrow = (todoId) => {
    const index = todoLists.findIndex((todo) => todo.id === todoId);
    const newArray = [...todoLists];
    const temp = newArray[index];
    newArray[index] = newArray[index + 1];
    newArray[index + 1] = temp;
    setTodoLists(newArray);
  };

  return (
    <div className="App">
      <ul style={{ listStyle: "none" }}>
        {todoLists.map((todo, index) => {
          return (
            <>
              <li key={index} style={{ display: "flex", alignItems: "center", justifyContent: 'center', padding: 1 }}>
                {todo.label} &nbsp;
                <div>
                  <button
                    onClick={() => handleUpArrow(todo.id)}
                    disabled={index === 0}
                  >
                    Up
                  </button>
                  &nbsp;
                  <button
                    onClick={() => handleDownArrow(todo.id)}
                    disabled={index === todoLists.length - 1}
                  >
                    Down
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
