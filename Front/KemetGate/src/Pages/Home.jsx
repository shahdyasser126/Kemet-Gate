import Features from "../components/Features/Features"
import { Hero } from "../components/Hero/Hero"
import Journey from "../components/Journey/Journey"
import NavBar from "../components/NavBar/NavBar"
 
import Works from "../components/Works/Works"
import Footer from "../components/Footer/Footer"
import Destanitions from "../components/Destanitions/Destanitions"
function Home(){

    return(
        <>
        <NavBar/>
        <Hero/>
        <Features/>
        <Destanitions/>
        <Journey/>
        <Works/>
        <Footer/>
        </>
    )

}
export default Home