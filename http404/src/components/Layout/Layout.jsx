import { Outlet} from "react-router"
import Footer from "./Footer/Footer"
import HeroContent from "./HeroContent/HeroContent"
import Navigation  from "./Navigation/Navigation"

const Layout = () => {
    return (
        <>
        <Navigation/>
        <HeroContent/>
        <Footer />
        <Outlet/>
        </>
    )

}

export default Layout