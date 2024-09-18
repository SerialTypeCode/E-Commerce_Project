<<<<<<< HEAD
import React, { useContext } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
<<<<<<< HEAD
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
=======
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useState(ShopContext);
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product && all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
<<<<<<< HEAD
                        <p>${getTotalCartAmount()}</p>
=======
                        <p>${getTotalCartAmount}</p>
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
<<<<<<< HEAD
                        <h3>${getTotalCartAmount()}</h3>
=======
                        <h3>${getTotalCartAmount}</h3>
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
                    </div>
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, enter it here</p>
                <div className="cartitems-promobox">
<<<<<<< HEAD
                    <input type="text" placeholder='promo code'/>
=======
                    <input type="type" placeholder='promo code'/>
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
<<<<<<< HEAD

export default CartItems
=======
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
