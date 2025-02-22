import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategoty = ({Data,showItems,setShowIndex}) => {
  
  const handleClick = () => {
    setShowIndex();
  }
    return (
    <div className="">
    <div className="w-7/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
    <div className="flex justify-between" onClick={handleClick}>
    <span className="font-bold text-lg" >{Data.title}  </span>
    <span>🢃</span>
    </div> 
       { showItems && <ItemList items = {Data.itemCards}/>} 
    </div>
</div>
    )
}  

export default RestaurantCategoty;