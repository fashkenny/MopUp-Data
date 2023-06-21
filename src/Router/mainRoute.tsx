import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Blocks/Layout";
import HomeScreen from "../Pages/HomeScreen";

export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[{
            index:true,
            element:<HomeScreen/>
        }]
    }
])