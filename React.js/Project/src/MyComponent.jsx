import { useState } from "react";


function MyComponent (){
    
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayemnt] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayemnt(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return (<div>
                <input value = {name} onChange = {handleNameChange}/>
                <p>Name: {name}</p>

                <input value = {quantity} onChange = {handleQuantityChange} type = "number"/>
                <p>Quantity: {quantity}</p>

                <textarea value = {comment} onChange = {handleCommentChange} placeholder = "Enter the delivery instructions"/>
                <p>Comment: {comment}</p>

                <select value = {payment}  onChange={handlePaymentChange}>
                    <option value = "">Select an Option</option>
                    <option value= "visa">Visa</option>
                    <option value= "Mastercard">Mastercard</option>
                    <option value = "giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type = "radio" value = "Pick up" checked = {shipping === "Pick Up"} onChange={handleShippingChange}/>
                    Pickup
                </label><br/>
                <label>
                    <input type = "radio" value = "Dilevery" checked = {shipping === "Dilevery"} onChange={handleShippingChange}/>
                    Dilevery
                </label>
                <p>Shipping: {shipping}</p>
            </div>);
}
export default MyComponent