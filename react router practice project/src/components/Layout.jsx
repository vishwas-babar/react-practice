import { Outlet } from "react-router-dom";
import { About, Footer, NavBar } from "./index.js";


function Layout() {
    return (
        <>
            <NavBar />
            <main className="p-8 mt-16">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;