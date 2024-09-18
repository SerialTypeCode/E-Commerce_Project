<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Items/Item'

const Popular = () => {

    const [popularProducts,setPopularProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/popularinwomen')
        .then((response)=>response.json()).then((data)=>setPopularProducts(data));
    },[])

=======
import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => { 
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
    return ( 
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
<<<<<<< HEAD
                {popularProducts.map((item,i)=>{
=======
                {data_product.map((item,i)=>{
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular