import { Link } from "react-router-dom";
const Data = ({ images, name, age, position, price }) => {
  //   const { images, name, age, position, price } = props;
  return (
    <>
      <div className="rounded  overflow-hidden relative bg-gray-50 hover:shadow-md">
        <Link to="#">
          <img
            src={images}
            alt="Ronaldo"
            className="w-full h-32 sm:h-56  object-cover"
          />
        </Link>
        <div className="m-4">
          <span className="font-bold ">{name}</span>
          <span className="ms-1">{age}</span>
          <span className="block">{position}</span>
        </div>
        <div className="bg-secondary-100 text-gray-800 text-xs sm:text-sm uppercase font-bold rounded py-1 px-3 absolute top-0 ml-2 mt-2 bg-opacity-50">
          <span>{price}</span>
        </div>
      </div>
    </>
  );
};
export default Data;
