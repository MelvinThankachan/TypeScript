import { useState } from "react";
import InputField from "./components/InputField";
import { ToDoElement } from "./types/utils";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDoElement[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    const task = toDo.trim();
    if (task) {
      const toDoElement: ToDoElement = {
        id: crypto.randomUUID(),
        task: task,
        isDone: false,
      };
      setToDoList([toDoElement, ...toDoList]);
      setToDo("");
    }
  };

  return (
    <div className="w-screen h-screen max-w-screen max-h-screen flex flex-col items-center bg-black ">
      <div className="w-[70%] max-w-3xl py-10 max-h-full flex flex-col items-center bg-black ">
        <span className="uppercase text-4xl my-7 text-white z-1 text-center md:text-2xl md:xy-4">
          Taskify
        </span>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </div>
  );
};

export default App;
