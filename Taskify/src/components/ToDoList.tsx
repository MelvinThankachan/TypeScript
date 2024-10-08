import { ReactSetStateFunction, ToDoElement } from "../types/utils";
import ToDoCard from "./ToDoCard";

type ToDoListProps = {
  toDoList: ToDoElement[];
  setToDoList: ReactSetStateFunction<ToDoElement[]>;
};

const ToDoList = ({ toDoList, setToDoList }: ToDoListProps) => {
  const handleEdit = (toDoId: string, task: string) => {
    setToDoList(
      toDoList.map((toDo) =>
        toDo.id === toDoId ? { ...toDo, task: task } : toDo
      )
    );
  };

  const handleDelete = (toDoId: string) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== toDoId));
  };

  const handleDone = (toDoId: string) => {
    setToDoList(
      toDoList.map((toDo) =>
        toDo.id === toDoId ? { ...toDo, isDone: !toDo.isDone } : toDo
      )
    );
  };

  return (
    <div className="text-white px-3 mt-5 flex justify-between w-full max-h-[60vh] flex-wrap overflow-auto">
      {toDoList.map((toDo) => (
        <ToDoCard
          key={toDo.id}
          toDo={toDo}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
