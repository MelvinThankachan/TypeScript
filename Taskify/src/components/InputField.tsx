import { ReactSetStateFunction } from "../types/utils";

type InputFieldProps = {
  toDo: string;
  setToDo: ReactSetStateFunction<string>;
  handleAdd: (event: React.FormEvent) => void;
};

const InputField = ({ toDo, setToDo, handleAdd }: InputFieldProps) => {
  return (
    <form
      action="#"
      className="flex w-full relative items-center"
      onSubmit={handleAdd}
    >
      <input
        className="w-full py-3 pl-3 pr-24 text-2xl border-none  break-words transition-all duration-200 outline-2 focus:outline focus:outline-white"
        type="text"
        placeholder="Enter a task"
        value={toDo}
        onChange={(event) => setToDo(event.target.value)}
      />
      <button
        className="text-white absolute px-6 py-2 h-12 mr-1 bg-black right-0 border-none text-sm transition-all duration-200 active:scale-75"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
