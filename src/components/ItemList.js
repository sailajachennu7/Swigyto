import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  if (!items || items.length === 0) return <p className="text-center text-gray-500 mt-6 text-lg font-semibold">No items to display</p>;

  return (
    <div className="space-y-4 p-5 bg-white rounded-lg shadow-md">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300"
        >
          <div className="w-8/12 pr-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.card.info.name} </h2>
            <p className="text-gray-600 text-sm mb-2 leading-normal">{item.card.info.description}</p>
            <span className="text-green-600 text-lg font-semibold">₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
          </div>
          <div className="w-4/12 flex flex-col items-center">
            <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className="w-full h-32 object-cover rounded-lg mb-3 border border-gray-200 shadow-sm" />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300 text-sm font-medium">Add +</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
