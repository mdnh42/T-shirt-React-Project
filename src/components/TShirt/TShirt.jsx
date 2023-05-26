import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    console.log(picture);
    return (
        <div className='tshirt'>

            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>

        </div>
    );
};

export default TShirt;