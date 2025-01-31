import { useState,useEffect } from "react";
import ShimmerUi from "./shimmerui";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const  {resId} = useParams();
    
    useEffect(() => {
        fetchMenu();
    },[]);

    const  fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4440777&lng=78.444776&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        
        const json = await data.json();

        console.log(json)
        setResInfo(json.data.cards)

    }
    if (resInfo ===null) return (<ShimmerUi/>)

    const {name,cuisines,costForTwoMessage} = resInfo[2]?.card?.card?.info;
    const {itemCards} = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
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