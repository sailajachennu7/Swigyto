import ShimmerUi from "./shimmerui";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const  {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo ===null) return (<ShimmerUi/>)

    const {name,cuisines,costForTwoMessage} = resInfo[2]?.card?.card?.info;
    const {itemCards} = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log("categories",categories);

    return (
        <div className="">
           <h1>{name || "Restaurant Name Not Found"}</h1>
           <h3>{cuisines.join(",")}</h3>
           <h3>{costForTwoMessage}</h3>
            <h2> Menu</h2>
            <ul>
                {itemCards.map((item) => <li key={item.card?.info?.id}>{item.card?.info?.name} - {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100 } Rs</li>)}
            </ul>
        </div>
    )
 };

export default RestaurantMenu;