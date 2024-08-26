import { useState } from "react";
import "./App.css";
import ImageHeader from "./components/ImageHeader";
import Input from "./components/Input";
import Button from "./components/Button";
import ItemList from "./components/ItemList";
import { items } from "./types/utils";

function App() {
  const [items, setItems] = useState<items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (event: React.FormEvent): void => {
    setInputValue(inputValue.trim());
    event.preventDefault();
    if (inputValue === "") return;

    setItems((prevItems) => [
      ...prevItems,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handleSubmit}>
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button
            type="submit"
            className="bg-gray-700 w-full p-2"
            buttonText="Add Task"
          ></Button>
        </form>
        <div className="h-96 overflow-y-auto">
          <ItemList items={items} setItems={setItems}></ItemList>
        </div>
      </div>
    </div>
  );
}

export default App;
