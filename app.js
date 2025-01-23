import React from "react";
import ReactDOM from "react-dom/client";

//  planning 
// 1.header
// --> logo
// --> nav items
// 2.Body
// --> searchbar
// --> restro container
//     --> restro cards
          // --> img,delivery Time,rating, cost etc,.
// 3. Footer
// --> copy right
// --> address
// --> contact
// --> links

const Header = () => {
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" src="https://t4.ftcdn.net/jpg/01/10/15/23/360_F_110152388_1x3oP8JvC7FaD2qtSLVcP0tMIlKZTUVK.jpg"/>
          </div>
          <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
          </div>
        </div>
    );
};

const RestroCard = (props) => {
  console.log(props);
  return(
 <div className="rest-card">
  <img  className="res-img" alt="res-logo" src= {"imageUrl"}/>
  <h3>{ props.name}</h3>
  <h5>{ props.rating}</h5>
  <h6> {props.cuisines}</h6>
  <h6>{props.deliveryTime}</h6>
 </div>
  );
};

const generateRestaurants = () => {
  const names = [" Meghana Foods", " nilofer", "Nandhana", "Bistro", "Kannur", "Eara Babu Pulav","Barkas", "Maha Raja"," BiryaniZone", "Meridian", "Sahdab", "Suchitra Biryani", "Dominos","PizzaHut", "Bahar Biryani","Gongura Palace"];
  const cuisinesList = [
    "Italian", "Chinese", "Mexican", "Indian", "Japanese", 
    "American", "Healthy", "Fast Food", "Vegan", "Barbecue"
  ];

  const foodImages = [
    "https://via.placeholder.com/150?text=Pizza",
    "https://via.placeholder.com/150?text=Burger",
    "https://via.placeholder.com/150?text=Sushi",
    "https://via.placeholder.com/150?text=Tacos",
    "https://via.placeholder.com/150?text=Salad",
    "https://via.placeholder.com/150?text=Steak",
    "https://via.placeholder.com/150?text=BBQ",
    "https://via.placeholder.com/150?text=Ice+Cream",
    "https://via.placeholder.com/150?text=Noodles",
    "https://via.placeholder.com/150?text=Fries"
  ];

  const restaurants = [];

  for (let i = 1; i <= 25; i++) {
    const randomName = `The ${names[Math.floor(Math.random() * names.length)]} ${i}`;
    const randomRating = (Math.random() * 1.5 + 3.5).toFixed(1); // Between 3.5 and 5.0
    const randomCuisines = [
      cuisinesList[Math.floor(Math.random() * cuisinesList.length)],
      cuisinesList[Math.floor(Math.random() * cuisinesList.length)],
    ];
    const randomDeliveryTime = `${Math.floor(Math.random() * 31) + 20} mins`; // Between 20 and 50 mins
    const randomImageUrl = foodImages[Math.floor(Math.random() * foodImages.length)];

    restaurants.push({
      name: randomName,
      rating: Number(randomRating),
      cuisines: Array.from(new Set(randomCuisines)), // Unique cuisines
      deliveryTime: randomDeliveryTime,
      imageUrl: randomImageUrl
    });
  }

  return restaurants;
};

const restaurantData = generateRestaurants();
console.log(restaurantData);

const Body = () => {
 return(
  <div className="body">
  <div className="search-bar">Search</div>
  <div className="res-container">
    <RestroCard resData={restaurantData}/>
    
  </div>
  </div>
 );
};

const AppLayout = () => {
    return (
     <div className="app">  
      <Header />
      <Body/>
     </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( <AppLayout /> )