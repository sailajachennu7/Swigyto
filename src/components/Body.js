import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import ShimmerUi from "./shimmerui";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGame from "../utils/OflineGame";
import UserContex from "../utils/UserContex";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    FetchedData();
  }, []);

  const FetchedData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4440777&lng=78.444776&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setFilteredRestaurant(listOfRestaurant);
      setSearchText("");
    }
  }, [location, listOfRestaurant]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <OfflineGame />;
  }

  const { LoginInfo, setUserName } = useContext(UserContex);

  return isLoading ? <ShimmerUi /> : (
    <div className="body bg-gradient-to-r from-red-100 to-orange-200 min-h-screen p-6">
      <div className="filter text-center">
        <div className="m-4 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-64 focus:ring-2 focus:ring-orange-400 transition"
              value={searchText}
              placeholder="Search Restaurants..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all"
              onClick={() => {
                const FilteredRestaurants = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(FilteredRestaurants);
              }}
            >
              Search
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
              onClick={() => {
                const FilteredData = listOfRestaurant.filter((res) => res.info.avgRating > 4.2);
                setFilteredRestaurant(FilteredData);
              }}
            >
              Top Rated Restaurants
            </button>
            <div className="flex items-center gap-2">
              <label>User Name :</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-64 focus:ring-2 focus:ring-orange-400 transition"
                value={LoginInfo}
                placeholder="Enter User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="transform transition-transform hover:scale-105"
          >
            <RestaurantCard Data={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
