import { items, ReactSetState } from "../types/utils";
import Button from "./Button";

type ItemList = {
  items: items[];
  setItems: ReactSetState<items[]>;
};

const ItemList = ({ items, setItems }: ItemList) => {
  const handleDelete = (id: string) => {
    setItems((prevItems) => prevItems.filter((data) => data.id !== id));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center border py-2 border-slate-600 px-2 mb-2 mr-1"
    >
      <p>{data.title}</p>
      <Button className="" onClick={() => handleDelete(data.id)}>
        <img src="/cancel-red.svg" alt="" />
      </Button>
    </div>
  ));
};

export default ItemList;
