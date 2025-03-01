import FormatCost from '../../FormatCost';
import './style.css'

function DetailItem(props) {
    return ( 
        <div className='detailItemContainer'>
            <img className='imgDetailItem' src={props.imageURL}></img>
            <div className='textDetailItem'>
                <p className='nameDetailItem'>{props.name}</p>
                <p className='quantityDetailItem'> x {props.quantity}</p>
            </div>
            <p className='costDetailItem'><FormatCost value= {props.cost}/></p>
        </div>
     );
}

export default DetailItem;