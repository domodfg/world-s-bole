import React, { useState, useEffect } from "react";

const CustomInput = (props) => {
    const [customQuantity, setCustomQuantity] = useState(props.displayValue);

    useEffect(() => {
        setCustomQuantity(props.displayValue);
      },[props.displayValue]);

    return <input id={props.id} className="quantity-details" type="number" min="1" onChange={props.handleChange} value={customQuantity} />
}

export default CustomInput