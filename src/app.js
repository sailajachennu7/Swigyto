import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import ContactUs from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/ReastaurentMenu";
import UserContex from "./utils/UserContex";

const Grocery = lazy(() => import("./components/Grocery"));

const AboutPage = lazy(() => import("./components/about"));


const AppLayout = () => {
    const [userName, setUserName] = useState();

useEffect(() => {
    const data = {
        name : "sailaja"
    };
    setUserName(data.name);
},[])

    return (
    <UserContex.Provider value={{LoginInfo : userName , setUserName}} >
       <div className="app">  
       <Header />
       <Outlet/>
       </div>
    </UserContex.Provider>
     
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
                element:<Suspense fallback={<h1>Loading....</h1>}><AboutPage/></Suspense>,
        
            },
            {
                path: "/contact",
                element:<ContactUs/>,
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
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