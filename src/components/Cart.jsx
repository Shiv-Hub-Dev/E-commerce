import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Payment from './payment';
import allProductData from '../data/ProductData';

function Cart({ cartProducts, setCartProducts }) {
    // console.log(cartProducts);
    let [total, setTotal] = useState(0)
    let [tax, setTax] = useState(0)
    useEffect(() => {
        let price = 0;
        cartProducts.forEach((product) => {
            price += +product.price.slice(1,);

        })

        setTotal(price)
        let presentTax = price * (25 / 100)
        setTax(presentTax)
    }, [cartProducts])


    function handleDelete(e) {
        let id = e.target.getAttribute('data-id')
        let newProduct = cartProducts.filter((product) => {
            return product.id != id
        })
        setCartProducts(newProduct)
    }

    function handleQuantity(e) {
        console.log(e.target);
        let id = e.target.getAttribute('data-id')
        console.log(allProductData);

        let targetedProduct = allProductData.find((product) => {
            return product.id == id
            // console.log(product.id == id);    
        })

        console.log(allProductData);
        let price = +targetedProduct.price.slice(1,)
        // console.log(price);

        let newPrice = price * e.target.value
        // console.log(newPrice);
        newPrice = `$${newPrice}`

        let newProducts = cartProducts.map((product) => {
            if (product.id == id) {
                product.price = newPrice
            }
            return product
        })

        setCartProducts(newProducts)
    }

    return (
        <>
            <div className="cart-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="Cart-box border p-4  ">

                                {cartProducts && cartProducts.map((product) => {
                                    return (
                                        <>
                                            <div className="cart-left d-flex gap-5 border mb-3 p-3">
                                                <img src={product.image} width={200} />
                                                <div className="cart-content">
                                                    <h3>{product.name}</h3>
                                                    <p className='mb-0'>Size: Regular</p>
                                                    <p>Color: White</p>
                                                    <h4> {product.price}</h4>
                                                </div>
                                                <div className="cart-buttons d-flex align-items-center gap-4 ms-5">
                                                    <select data-id={product.id} onChange={handleQuantity} class="form-select" aria-label="Default select example" >
                                                        <option value='1'>1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                    <div data-id={product.id} onClick={handleDelete} className="btn btn-info d-flex align-items-center gap-2"><i class="fa-regular fa-circle-xmark"></i>Remove</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>


                        <div className="col-md-5">
                            <div className="cart-summary border p-4">
                                <div className="cart-input border p-3 ">
                                    <h2>Cart Summary</h2>
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control" aria-label="Sizing example input" placeholder='Enter discount code' aria-describedby="inputGroup-sizing-default " />
                                        <span class="input-group-text btn btn-success" id="inputGroup-sizing-default">Default</span>
                                    </div>
                                </div>
                                <div className="estimate border mt-4 p-3">
                                    <h4>Estimate Shippping and Tax</h4>
                                    <hr />
                                    <div className="cart-form d-flex flex-column gap-3">
                                        <div class="col-md-4 w-100" >
                                            <label for="inputState" class="form-label">Country Name</label>
                                            <select id="inputState" class="form-select">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4 w-100">
                                            <label for="inputState" class="form-label">State/Province</label>
                                            <select id="inputState" class="form-select">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2 w-100 ">
                                            <label for="inputZip" class="form-label">Zip/Postal Code</label>
                                            <input type="text" class="form-control" id="inputZip" />
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-total border mt-4 p-3">
                                    <p className='d-flex justify-content-between'>
                                        <span>Subtotal</span>
                                        <span>${total}</span>
                                    </p>
                                    <p className='d-flex justify-content-between'>
                                        <span>Shipping</span>
                                        <span>--</span>
                                    </p>
                                    <p className='d-flex justify-content-between'>
                                        <span>Taxes</span>
                                        <span>${tax}</span>
                                    </p>
                                    <p className='d-flex justify-content-between'>
                                        <span>Discount</span>
                                        <span>--</span>
                                    </p>
                                    <hr />
                                    <div className="total-order">
                                        <h4 className='d-flex justify-content-between' >
                                            <span>Total Order</span>
                                            <span>${total + tax}</span>
                                        </h4>

                                        <Link to='/payment'><button type="button" className="btn btn-primary w-100">Proceed to checkout</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart