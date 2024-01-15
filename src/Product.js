import { useState } from "react";

function Product(props){

     let [isAvailable,setIsAvailable]=useState("yes")

    function makeNotAvailable(){
        setIsAvailable("No");
    }

    return(
        <div className="product">
            <img className="img"  alt="Img" src={props.url}></img>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{isAvailable}</p>

            <button onClick={makeNotAvailable
            }>Click</button>
        </div>
    )
}
export default Product;