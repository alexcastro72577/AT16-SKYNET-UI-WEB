import React from "react";
import '../components/NavBar.js'
import NavBar from "../components/NavBar.js";
import Video from "../components/Video.js"
import Footer from "../components/Footer.js"

const Home = () => {
    return (
        <div>
            <NavBar />
            <Video />
            <Footer />
        </div>
    )
}

export default Home
