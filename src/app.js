import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import AboutPage from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/ReastaurentMenu";

const AppLayout = () => {
    return (
     <div className="app">  
      <Header />
      <Outlet/>
     </div>
    );
};

const AppRouter =  createBrowserRouter ([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
        
            },
            {
                path:"/about",
                element:<AboutPage/>,
        
            },
            {
                path: "/contact",
                element:<Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
        ],
        errorElement:<Error/>,
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={AppRouter}/>);