import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div className='order-summary-container'>
            <h3>Order Summary {cart.length}</h3>
            {
                cart.length > 2 ? <spn>Aro Kino</spn> : <span>Forkira</span>
            }
            {
                cart.map(tshirt => <p
                    key={tshirt.id}
                >{tshirt.name}
                    <button
                        onClick={() => handleRemoveFromCart(tshirt.id)}
                    >X</button></p>)
            }
        </div>
    );
};

export default Cart;