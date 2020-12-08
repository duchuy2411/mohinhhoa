import "./style.css"
import Button from "../../common/Button"
import {useState, useEffect} from "react"
import store from "../../../store"

function CommonCard () {
    const [products, setProduct] = useState(store.getState().products);
    
    return (
        <>
        { 
        products.map(pro => { return (
        <div className="common-card">
            <img src={pro.images}/>
            <div>{pro.name}</div>
            <div className="common-card-price">{pro.price}đ</div>

            <div className="gr-button">
                <Button fnc="Add" />
                <Button fnc="Detail" />
            </div>
        </div>
        )})
        }
        </>
    )
}

export default CommonCard;
