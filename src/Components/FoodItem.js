// Component tái sử dụng cho món ăn
const FoodItem = ({ img, name }) => (
    <div className="food-item">
        <img src={img} alt={name} />
        <p>{name}</p>
    </div>
);

export default FoodItem ;
