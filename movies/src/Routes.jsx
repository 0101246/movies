import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Hero from "./components/Hero";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/movies",
                element: <Movies />,
            },
            {
                path: "/hero",
                element: <Hero />,
            }
            
        ]
    }, 
]);