<<<<<<< HEAD
import React, { useEffect, useState, createContext } from 'react'
//import all_product from "../Components/Assets/all_product"
=======
import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
<<<<<<< HEAD
    for(let index = 0; index < 300 + 1; index++)
=======
    for(let index = 0; index < all_product.length + 1; index++)
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
    {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
<<<<<<< HEAD

    const [all_product,setAll_Product] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts').then((response)=>response.json()).then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token'))
        {
            fetch('http://localhost:4000/getcart',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:"",
            }).then((response)=>response.json()).then((data)=>setCartItems(data));
        }
    },[])

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token'))
        {
            fetch('http://localhost:4000/addtocart',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId":itemId}),
            }).then((response)=>response.json()).then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token'))
        {
            fetch('http://localhost:4000/removefromcart',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId":itemId}),
            }).then((response)=>response.json()).then((data)=>console.log(data));
        }
=======
    const[cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;