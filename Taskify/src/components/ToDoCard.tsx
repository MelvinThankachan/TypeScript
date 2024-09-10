import { MdCheck, MdDelete, MdEdit, MdUndo } from "react-icons/md";
import { ToDoElement } from "../types/utils";

type ToDoCardProps = {
  toDo: ToDoElement;
  handleDelete: (toDoId: string) => void;
  handleDone: (toDoId: string) => void;
};

const ToDoCard = ({ toDo, handleDelete, handleDone }: ToDoCardProps) => {
  return (
    <form
      action="#"
      className={`flex justify-between mb-1 p-3 bg-white text-black w-full lg:w-[49.5%] items-center transition-opacity duration-300 ${
        toDo.isDone ? "opacity-50" : "opacity-100"
      }`}
    >
      <span
        className={`flex-1 p-1 max-w-[calc(100%-5rem)] border-none text-xl break-words ${
          toDo.isDone ? "line-through" : ""
        }`}
      >
        {toDo.task}
      </span>
      <div className="flex gap-1 items-center">
        {!toDo.isDone && (
          <span className="card-icon">
            <MdEdit title="Edit" />
          </span>
        )}
        <span className="card-icon">
          <MdDelete
            title="Delete"
            className="text-red-500 hover:text-red-600"
            onClick={() => handleDelete(toDo.id)}
          />
        </span>
        <span
          className={"card-icon transition-transform duration-200 ease-in-out"}
        >
          {toDo.isDone ? (
            <MdUndo
              title="Undo"
              className="text-blue-500 hover:text-blue-600 fade-in" // Adjust size and color
              onClick={() => handleDone(toDo.id)}
            />
          ) : (
            <MdCheck
              title="Complete"
              className="text-green-600 hover:text-green-700 fade-in" // Adjust size and color
              onClick={() => handleDone(toDo.id)}
            />
          )}
        </span>
      </div>
    </form>
  );
};

export default ToDoCard;
