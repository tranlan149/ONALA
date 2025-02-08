import ProductCard from "../../Components/ProductCard";
function TrangChu(){
    return(
        <>
            {/*code vao day*/}
            <div style={{margin:'50px'}}>TrangChu
                <ProductCard
                    imageURL='../../image/cam.png'
                    name='trà đào cam xả'
                    description =' 01 trà đào cam xả'
                    cost='100000'
                />
            </div>
        </>
    );
}
export default TrangChu;