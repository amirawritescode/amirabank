import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/data';
import Footer from '../components/Footer';
import Services from '../components/Services';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
           <Navbar toggle={toggle}/>
           <Sidebar  isOpen={isOpen} toggle={toggle} />
           <HeroSection />
           <InfoSection {...homeObjOne} />
           <Services />
           <InfoSection {...homeObjTwo} />
           <InfoSection {...homeObjThree} />
           <Footer />
        </>
    )
}

export default Home

