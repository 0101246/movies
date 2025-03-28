import { Link, Outlet } from "react-router";

export default function Navbar() {
    return (
        <>
        <div className="bg-blue-200 p-4 flex justify-between items-center shadow-md mb-4 text-3xl">
            <Link to="">Home</Link>
            <Link to="movies">Movies</Link>
            <Link to="hero">Heros</Link>
            
        </div>
        <Outlet/>
        </>

    )
}