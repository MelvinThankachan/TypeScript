import { ReactSetState } from "../types/utils";

type Input = {
  type: React.HTMLInputTypeAttribute;
  inputValue: string;
  setInputValue: ReactSetState<string>;
};

const Input = ({ type, inputValue, setInputValue }: Input) => {
  return (
    <input
      type={type}
      value={inputValue}
      className="w-full p-2 rounded-sm mb-2"
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};

export default Input;
