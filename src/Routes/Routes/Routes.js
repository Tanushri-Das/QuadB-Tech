
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import ShowDetails from "../../Pages/ShowDetails/ShowDetails";

const { createBrowserRouter } = require("react-router-dom");

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/show/:id',
                element:<ShowDetails/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])
export default routes;