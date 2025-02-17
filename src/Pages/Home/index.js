import React from "react";
import banner from "../../image/banner.png";
import homebutton1 from "../../image/homebutton1.png";
import homebutton2 from "../../image/homebutton2.png";
import homebutton3 from "../../image/homebutton3.png";
import homebutton4 from "../../image/homebutton4.png";
import combo1 from "../../image/combo1.png";
import combo2 from "../../image/combo2.png";
import combo4 from "../../image/combo4.png";
import humberger from "../../image/humberger.png";
import douong from "../../image/douong.png";
import doanvat from "../../image/doanvat.png";
import banh from "../../image/banh.png";
import ga from "../../image/ga.png";
import logosale1 from "../../image/logosale1.png";
import logosale2 from "../../image/logosale2.png";
import FoodItem from "../../Components/FoodItem";
import SaleItem from "../../Components/SaleItem";
import "./style.css";


function Home() {
    const foodItems = [
        { name: "Combo 1 Người", img: combo1 },
        { name: "Combo 2 Người", img: combo2 },
        { name: "Combo Nhóm 4", img: combo4 },
        { name: "Hamburger", img: humberger },
        { name: "Gà", img: ga },
        { name: "Đồ Uống", img: douong },
        { name: "Bánh Ngọt", img: banh },
        { name: "Đồ Ăn Vặt", img: doanvat }
    ];

    const sales = [logosale1, logosale2];

    return (
        <>
            {/* Banner */}
            <div className="banner">
                <img src={banner} alt="Banner" />
            </div>

            {/* Menu Section */}
            <div className="menu-section">
                {[homebutton1, homebutton2, homebutton3, homebutton4].map((img, index) => (
                    <div className="menu-box" key={index}>
                        <img src={img} alt={`Menu ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Danh Mục Món Ăn */}
            <h3 className="section-title">DANH MỤC MÓN ĂN</h3>
            <div className="food-category">
                {foodItems.map((item, index) => (
                    <FoodItem key={index} img={item.img} name={item.name} />
                ))}
            </div>

            {/* SALE */}
            <h3 className="section-title">SALE</h3>
            <div className="sale-section">
                <div className="sale-container">
                    {sales.map((img, index) => (
                        <SaleItem key={index} img={img} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
