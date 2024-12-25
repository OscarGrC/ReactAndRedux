import { Outlet } from "react-router-dom"
import { Banner } from "../components/banner/banner"
import { Footer } from "../components/footer/footer"


export const Layout = () => {

    return <>
        <Banner />
        <Outlet />
        <Footer />

    </>
}