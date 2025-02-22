import ShimmerUi from "./shimmerui";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return (<ShimmerUi />);

    const { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;
    const categories = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

    const handleCategoryClick = (index) => {
        setShowIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
       <div className="bg-blue-100">
         <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name || "Restaurant Name Not Found"}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    Data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => handleCategoryClick(index)}
                />
            ))}
        </div>
       </div>
    );
};

export default RestaurantMenu;
