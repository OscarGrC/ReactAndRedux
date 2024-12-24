import { Outlet } from "react-router-dom"
import { Banner } from "../components/banner/banner"


export const Layout = () => {

    return <>
        <Banner />
        <Outlet />

        <footer>
            <p>Grupo T</p>
        </footer>

    </>
}