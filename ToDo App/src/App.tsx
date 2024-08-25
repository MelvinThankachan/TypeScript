// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import ImageHeader from "./components/imageHeader";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    if (items.includes(inputValue.trim())) return;
    setItems((prevItems) => [...prevItems, inputValue.trim()]);
    setInputValue("");
  };
  const handleDelete = (value: string) => {
    setItems((prevItems) => prevItems.filter((data) => data !== value));
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            className="w-full p-2 rounded-sm mb-2"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button className="bg-gray-700 w-full p-2" type="submit">
            Add Task
          </button>
        </form>
        <div className="h-52 overflow-y-auto">
          {items.map((data) => (
            <div
              key={data}
              className="flex justify-between items-center border py-2 border-slate-600 px-2 mb-2 mr-1"
            >
              <p>{data}</p>
              <button onClick={() => handleDelete(data)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  style={{ fill: "#FA5252" }}
                >
                  <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
