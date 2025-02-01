import React, { useEffect } from 'react'
import { Link, Links } from 'react-router-dom'
import allProductData from '../data/ProductData'


function Products({ cartProducts, setCartProducts }) {
    function handleAddToCart(e) {
        // console.log(e.target);

        // let id = e.target.getAttribute('cart-btn')
        // let exist= cartProducts.find((product)=>{
        //     return product.id == id
        // })
        // if(!exist){
        //     let data = allProductData.find((product) => {
        //         return product.id == id
        //     })    
        //     setCartProducts([...cartProducts, data])
        //     console.log(data);
        // }    
        
       
        let id = e.target.getAttribute("cart-btn")
        let exist=cartProducts.find((product)=>{
            return product.id==id
        })
        if(!exist){
            let data=allProductData.find((product)=>{
                return product.id==id
            })
            setCartProducts([...cartProducts,data])
        }
    }
    useEffect(()=>{
        allProductData.forEach((product)=>{
            let id=product.id;
            let para=document.querySelector(`#para-${id}`)
            // console.log(para);
            
            let rating=product.rating
            let star=`<i class="fa-solid fa-star"></i>`
            let allStars=star.repeat(rating)
            para.innerHTML=allStars
        })
    })

    return (
        <>
            <div className="main-body">
                <div className="sidebar ">
                    <div className="categories">
                        <h2>Categories</h2>
                        <ul>
                            <li>Clothings<span class="badge text-bg-info">99</span></li>
                            <li>Glasses<span class="badge text-bg-info">45</span></li>
                            <li>Bags<span class="badge text-bg-info">87</span></li>
                            <li>Shoes<span class="badge text-bg-info">800</span></li>
                            <li>Watches<span class="badge text-bg-info">188</span></li>
                            <li>Furniture<span class="badge text-bg-info">98</span></li>
                            <li>Accessories<span class="badge text-bg-info">188</span></li>
                            <li>Headphones<span class="badge text-bg-info">83</span></li>
                        </ul>
                        <hr />
                        <div className="price">
                            <h2>PRICE </h2>
                            <input type="range" className='w-100' />
                            <div className="filter d-flex justify-content-between pt-1">
                                <button className="btn btn-primary">Filter</button>
                                <span>
                                    Price:$100-$1000
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div className="colors-box ">
                            <h2>COLORS</h2>
                            <div className="colors">
                                <p>Blue</p>
                                <p>Red</p>
                                <p>Green</p>
                                <p>Yellow</p>
                                <p>Purple</p>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="main">

                    <div className="container-fluid">
                        <div className="row">
                            {allProductData.map((product) => {
                                return (
                                    <div className="col-md-4">
                                        <div className="card">
                                            <Link to={`/productdetails/${product.id}`}>
                                                <div className="text-center">
                                                    <img src={product.image} class="card-img-top" style={{ height: "200px" }} alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <p class="card-text mb-1" style={{ fontSize: "13px" }}> Our Product</p>
                                                    <h4 class="card-title ">{product.name}</h4>
                                                    <div className="rating">
                                                        <p className='d-flex gap-2'>{product.price}</p>
                                                        <p id={`para-${product.id}`} style={{ color: " orange" }}>
                                                            
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link> 
                                            <button cart-btn={product.id} onClick={handleAddToCart} class="btn btn-success d-flex align-items-center justify-content-center gap-2 " style={{ width: "100%" }}>
                                                <i cart-btn={product.id} className="fa-solid fa-shopping-cart mb-2"></i>
                                                <h5 cart-btn={product.id}>Add to Cart</h5>
                                            </button>
                                        </div>
                                    </div>
                                )

                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products