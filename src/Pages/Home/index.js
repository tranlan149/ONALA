
function Home(){
    return(
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
