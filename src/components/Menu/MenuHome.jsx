import React from "react";
import Slide from "../Slide/Slide";
import Card from "./Card";
import Footer from "../Footer/Footer";


const MenuHome = () => {
    const data = [
        {
            id: 1,
            titleOne: "Welcome to Grill House",
            titleTwo: "Exquisite Dining Experience",
            paraOne: "Discover our chef’s special dishes crafted with fresh ingredients",
            paraTwo: "Savor the flavors of gourmet meals, refreshing drinks, and delightful desserts.",
            name: "by Chef Antonio",
            subtitle: "Taste the Luxury, Feel the Comfort",
            qrcode: "./delivery-Photoroom (1).png",
            cover: "./home-4.jpg"
        },
    ];
    return (
        <div>
            <section className="home">
                <div className="left-content">
                    {data.map((value) => {
                        return (
                            <div className="content">
                                <div className="logo">
                                    <h1>GRILL HOUSE</h1>
                                </div>
                                <div className="home-img">
                                    <img src={value.cover} alt="cover image" />
                                </div>
                                <div className="text">
                                    <h1>{value.titleOne}</h1>
                                    <p>{value.paraOne}</p>
                                </div>
                                <div className="text text2">
                                    <h1>{value.titleTwo}</h1>
                                    <p>{value.paraTwo}</p>
                                </div>
                                <div className="qrcode">
                                    <img src={value.qrcode} alt="qr code" />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="right-content">
                    <Slide />
                    <Card />
                    <Footer />
                </div>
            </section>
        </div>
    );
};

export default MenuHome;
