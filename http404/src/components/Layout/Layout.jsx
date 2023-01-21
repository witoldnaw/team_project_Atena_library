import { Outlet} from "react-router"
import Footer from "./Footer/Footer"

const Layout = () => {
    return (
        <>
        <Footer />
        <Outlet/>
        </>
    )

}

export default Layout