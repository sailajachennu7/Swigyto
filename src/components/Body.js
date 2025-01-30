import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./shimmerui";

const Body = () => { 
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    FetchedData();
  }, []);

  const FetchedData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4440777&lng=78.444776&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

//converting data to json format using json method
    const json = await data.json();

  setListOfRestaurant(
    //optional chaining for eliminating errors in the console with (?)
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  //conditional rendering if no data is there then renders shimmerUi
  // if (listOfRestaurant.length === 0){
  //   return <ShimmerUi/>
       
  // };


//conditional rendering with ternary operator

  return listOfRestaurant.length === 0 ? <ShimmerUi/> : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {/* Mapping over the restaurant list */}
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} Data={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
