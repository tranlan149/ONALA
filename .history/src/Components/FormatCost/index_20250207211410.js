
function FormatCost() {
    const formattedValue = new Intl.NumberFormat('vi-VN').format(value);
    return ( 
        <span>{formattedValue} Đ</span>;
    );
}

export default FormatCost;