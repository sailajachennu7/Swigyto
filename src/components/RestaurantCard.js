import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { Data } = props; // Fix the prop name (was Data)

    // Handle cases where data is undefined
    if (!Data) return null;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={CDN_URL + (Data?.cloudinaryImageId || "")}
            />
            <h3 className="font-bold py-4 text-lg">{Data?.name || "Unknown Restaurant"}</h3>
            <h4>{Data?.cuisines?.join(", ") || "No cuisines available"}</h4>
            <h4>{Data?.avgRating ? `${Data.avgRating} ⭐` : "No rating"}</h4>
            <h4>{Data?.costForTwo || "Price not available"}</h4>
            <h4>{Data?.sla?.deliveryTime ? `${Data.sla.deliveryTime} mins` : "Delivery time unknown"}</h4>
        </div>
    );
};

export default RestaurantCard;
