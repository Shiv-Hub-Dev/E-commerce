import React from 'react'
import { Link } from 'react-router-dom';
import allProductData from '../data/ProductData';

function Header({cartProducts}) {
    
    let products = cartProducts.length;
    function themeChanger() {
        document.querySelector("body").classList.toggle("light");
        let label = document.querySelector(".theme-changer label")
        if (label.innerText == "light mode") {
            label.innerText = "dark mode"
        }
        else {
            label.innerText = "light mode"
        }

    }

    function handleSearch(e){
        let box= document.querySelector('.search-product-box')
        if(e.target.value==''){
            box.style.display='none'
        }
        else{
            box.style.display='block'
        }
        let inputValue= e.target.value
        let heading=document.querySelectorAll('.search-product-box h4')
        heading.forEach((head)=>{
            if(head.innerText.toLowerCase().includes(inputValue.toLowerCase())){
                head.style.display='block'
            }
            else{
                head.style.display='none'
            }
        })
    }
    function clearSearch(){
        let box= document.querySelector('.search-product-box')
        box.style.display='none'
        document.querySelector('#navSearch').value=''

    }

   
    // console.log(products);
    
    return (
        <>
            <header >
                <nav>
                    <Link to='/'>
                    <div className="logo"><span>E</span>Company</div>
                    </Link>
                    <div className="search-box">

                        <div class="btn-group dropdown " >
                            <button type="button" class="btn btn-danger">All</button>
                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <input type="text" placeholder="Search..." id='navSearch' onKeyUp={handleSearch} />

                        <button className='search'><i className="fa-solid fa-search"></i></button>
                    </div>
                    <Link to='/cart'>
                        <div className="cart position-relative">
                            {products?<span class="badge text-bg-danger text-white position-absolute" style={{fontSize : "10px" , left:"8px", top:"4px"}}>{products}</span> :""}
                            <i className="fa-solid fa-shopping-cart"></i>
                            <span>Cart</span>
                        </div>
                    </Link>
                    <div className="theme-changer">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={themeChanger} />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Dark mode</label>
                        </div>
                    </div>
                </nav>
            </header >

            <div className="search-product-box">
                <h2>Products</h2>
                <div className="listed-products">
                    {allProductData.map((product)=>{
                        return <Link to={`/productdetails/${product.id}`} onClick={clearSearch}><h4>{product.name}</h4></Link>
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default Header