import React, { useState } from 'react';
import FirstPage from '../components/FirstPage';
import InfoSection from '../components/InfoSection';
import {
    homeObjectOne,
    homeObjectTwo,
    homeObjectThree
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <FirstPage />
            <InfoSection {...homeObjectOne} />
            <InfoSection {...homeObjectTwo} />
            <Services />
            <InfoSection {...homeObjectThree} />


        </>

    )
}

export default Home;