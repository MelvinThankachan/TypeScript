import {
  MdCheck,
  MdDelete,
  MdEdit,
  MdEditSquare,
  MdUndo,
} from "react-icons/md";
import { ToDoElement } from "../types/utils";
import React, { useEffect, useRef, useState } from "react";

type ToDoCardProps = {
  toDo: ToDoElement;
  handleDelete: (toDoId: string) => void;
  handleDone: (toDoId: string) => void;
  handleEdit: (toDoId: string, task: string) => void;
};

const ToDoCard = ({
  toDo,
  handleDelete,
  handleDone,
  handleEdit,
}: ToDoCardProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editToDoText, setEditToDoText] = useState<string>(toDo.task);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const onEdit = (event: React.FormEvent) => {
    event.preventDefault();
    const task = editToDoText.trim();
    if (task) {
      handleEdit(toDo.id, task);
      setEditToDoText(task);
      setIsEditing(false);
    }
  };

  return (
    <form
      className={`flex justify-between mb-1 p-3 bg-white text-black w-full lg:w-[49.5%] items-center transition-all duration-300 ${
        toDo.isDone ? "opacity-50 scale-[0.98]" : "opacity-100"
      }`}
      onSubmit={onEdit}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            className="flex-1 p-1 max-w-[calc(100%-5rem)] border-none text-xl focus:outline-none break-words"
            value={editToDoText}
            onChange={(event) => setEditToDoText(event.target.value)}
            ref={inputRef}
          />
          <button className="flex gap-1 items-center" type="submit">
            <MdEditSquare className="card-icon text-blue-500 hover:text-blue-600 fade-in" />
          </button>
        </>
      ) : (
        <>
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
                <MdEdit title="Edit" onClick={() => setIsEditing(true)} />
              </span>
            )}
            <span className="card-icon">
              <MdDelete
                title="Delete"
                className="text-red-500 hover:text-red-600"
                onClick={() => handleDelete(toDo.id)}
              />
            </span>
            <span className="card-icon">
              {toDo.isDone ? (
                <MdUndo
                  title="Undo"
                  className="text-blue-500 hover:text-blue-600 fade-in"
                  onClick={() => handleDone(toDo.id)}
                />
              ) : (
                <MdCheck
                  title="Complete"
                  className="text-green-600 hover:text-green-700 fade-in"
                  onClick={() => handleDone(toDo.id)}
                />
              )}
            </span>
          </div>
        </>
      )}
    </form>
  );
};

export default ToDoCard;
