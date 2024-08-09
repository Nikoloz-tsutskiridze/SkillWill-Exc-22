import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchItems,
  addItem,
  updateItem,
  deleteItem,
} from "../features/itemSlice";

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const status = useSelector((state) => state.items.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Items List</h2>
      {items.map((item) => (
        <div key={item.id}>
          {item.name}
          <button
            onClick={() =>
              dispatch(updateItem({ id: item.id, name: "Updated Item" }))
            }
          >
            Update
          </button>
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
        </div>
      ))}
      <button
        onClick={() =>
          dispatch(addItem({ id: new Date().toISOString(), name: "New Item" }))
        }
      >
        Add Item
      </button>
    </div>
  );
};

export default ItemList;
