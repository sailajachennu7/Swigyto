import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./shimmerui";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGame from "../utils/OflineGame";


const Body = () => { 
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    FetchedData();
  }, []);

  const FetchedData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4440777&lng=78.444776&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

  setListOfRestaurant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  setFilteredRestaurant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineGame />;  
  };

  return listOfRestaurant.length === 0 ? <ShimmerUi/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
         <input type="text" className="search-input" value={searchText} onChange={(e) => {
          setSearchText(e.target.value)
        }} />
        <button className="search-btn"
        onClick={() => {
        const FilteredRestaurents = listOfRestaurant.filter((res) => 
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
         setFilteredRestaurant(FilteredRestaurents);
        }}
        >search</button>
        </div>
        <button className="filter-btn" 
        onClick={() => {
          const FilteredData = listOfRestaurant.filter((res) => res.info.avgRating > 4);
          setListOfRestaurant(FilteredData);
        }}
        >Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {/* Mapping over the restaurant list */}
        {filteredRestaurant.map((restaurant) => (
  
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  Data={restaurant.info} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
