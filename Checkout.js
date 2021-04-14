import React from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user}, dispatch]= useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src="https://techcrunch.com/wp-content/uploads/2017/09/hilton-amazon.png?w=1024"/>
                <div className='checkout_title'>
                    <h3>Hello {user?.email},</h3>
                    <h2>YOUR SHOOPING BASKET</h2>
                    {basket.map(item=>(
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div> 
    )
}

export default Checkout
