import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Feature from './Feature';
import Carousel from './Carousel';
import DLCount from './DLCount';
import Team from './Team';
// import { scroller } from './Scroll';

const Home = () => {
    //Import them so I can see and adjust this overflow animation when i want
    // scroller();

    return ( 
        <>
            <Navbar/>
            <Intro/>
            <Feature/>
            <Carousel/>
            <DLCount/>
            <Team/>
            <Footer/>
        </>
     );
}
 
export default Home;