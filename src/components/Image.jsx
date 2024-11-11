import { useState } from "react";
const Image = ({ images, price }) => {
  const [count, setcount] = useState(0);
  return (
    <>
      <div className=" dark:bg-white  overflow-hidden  rounded relative">
        <img src={images} alt="001" />
        <div className="flex  items-center absolute top-0">
          <h1 className="text-gray-100 m-1 px-1 pt-py1 pb-1 text-center font-medium  bg-indigo-400 w-20 rounded">
            Price{price}
          </h1>
        </div>
        <div className="m-2">
          <span className="px-1 pt-py1 pb-1 mr-1 font-bold text-xs text-gray-700 bg-slate-200  rounded   cursor-pointer">
            {count}
          </span>
          <span
            onClick={() => {
              setcount(count + 1);
            }}
            className="pl-1 px-1 pt-py1 pb-1 mx-1 font-bold text-xs text-gray-700 bg-indigo-100 hover:text-indigo-500  rounded cursor-pointer"
          >
            Add
          </span>
          <span
            onClick={() => {
              setcount(count - 1);
            }}
            className="pl-1 px-1 pt-py1 pb-1 font-bold text-xs text-gray-700 bg-indigo-100 hover:text-indigo-500  rounded  cursor-pointer"
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
};
export default Image;
