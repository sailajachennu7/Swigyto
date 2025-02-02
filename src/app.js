import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import AboutPage from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/ReastaurentMenu";

const Grocery = lazy(() => import("./components/Grocery"));

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