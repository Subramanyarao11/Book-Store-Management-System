import React from "react";
import Authors from "./Authors";
import Books from "./Books";
import Footer from "./Footer";
import Hero from "./Hero";
import LogoCloud from "./logocloud";
const Home = () => {
    return (
        <div>
            <Hero />
            <Books />
            <LogoCloud />
            <Authors />
            <Footer />

            <style>
                {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
        </div>
    );
};
export default Home;
