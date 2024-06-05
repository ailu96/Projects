
import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import './../style.css';
import appStore from "./redux/appStore";
import Cart from "./components/Cart";


const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{
    return (
        <Provider store={appStore}>
        <div className='app'>
           <Header/>
           <Outlet />
        </div>
        </Provider>
    );
}

const appRouter= createBrowserRouter(
    [
    {

        path:"/",
        element:<AppLayout></AppLayout>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/About",
                element:<About />
            },
            {
                path:"/Contact",
                element:<Contact/>
            },  {
                path:"/Grocery",
                element:<Suspense fallback={<Shimmer></Shimmer>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestroMenu />
            },
            {
                path:"/Cart",
                element:<Cart />
            },
        ],
        errorElement:<Error></Error>
    },

])
const root=ReactDOM.createRoot(document.getElementById('root'));

// Cmponent Composition : having component inside component is component composition here we have title iside headingComponent
root.render(<RouterProvider router={appRouter}/>);


