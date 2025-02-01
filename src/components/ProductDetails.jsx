import React, { useEffect, useState } from 'react'
import allProductData from '../data/ProductData'
import { Link, useParams } from 'react-router-dom'

function ProductDetails({ cartProducts, setCartProducts }) {
  let params = useParams()
  // console.log(params.id);
  let myData = allProductData.find((product) => {
    return product.id == params.id

  })


  const [rating, setRating] = useState(myData.rating);

  useEffect(() => {
    setRating(myData.rating);
  }, [myData]);



  function handleAddToCart(e) {
    // console.log(e.target);
    let productId = allProductData.find((product) => {
      return product.id == params.id      
    })
    let id = productId;
    setCartProducts([...cartProducts, id])
    // console.log(id);
  }

  return (
    <>
      <div className="product-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 ">
              <div className="image d-flex align-items-center justify-content-center mt-3 ">
                <img src={myData.image} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="product-info mt-5">
                <h2 className="product-name">{myData.name}</h2>
                <div className="rating d-flex">
                  <p style={{ color: " orange" }}>
                    {Array.from({ length: rating }, (_, index) => (
                      <i key={index} className="fa-solid fa-star"></i>
                    ))}
                  </p>
                  <p>(24 rating)</p>
                </div>
                <p className='d-flex gap-2 product-price'>$49.00</p>
                <div className="description">
                  <h4>Discription</h4>
                  <p>{myData.description}</p>
                </div>
                <div className="product-id d-flex gap-5">
                  <span>Product id :</span>
                  <span>#SMK{myData.id}</span>
                </div>
                <div className="filter d-flex gap-5 mt-5">
                  <div className="quantity d-flex flex-column">

                    <div className="quantity d-flex flex-column">
                      <label htmlFor="quantity">Quantity</label>
                      <select name="" className='form-select py-0' id="quantity" style={{ width: "60px", background: "transparent", color: "var(--main-text-color)", border: "none" }}>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                      </select>
                    </div>
                  </div>
                  <div className="size">

                    <div className="size d-flex flex-column">
                      <label htmlFor="size">Size</label>
                      <select name="" className='form-select py-0' id="size" style={{ width: "60px", background: "transparent", color: "var(--main-text-color)", border: "none" }}>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XS</option>
                        <option value="">XL</option>
                      </select>
                    </div>
                  </div>
                  <div className="colors-box">
                    <span>Colors</span>
                    <div className="colors d-flex gap-1">
                      <div className="red"></div>
                      <div className="purple"></div>
                      <div className="green"></div>
                      <div className="blue"></div>
                    </div>
                  </div>
                </div>
                <div className="cart-box d-flex gap-5 mt-5">
                  <Link>
                    <button onClick={handleAddToCart} addcart-btn={allProductData.id} class="btn btn-info d-flex align-items-center justify-content-center gap-2" style={{ width: "200px", padding: "7px 10px" }}>
                      <i className="fa-solid fa-shopping-cart mb-2"></i>
                      <h5>Add to Cart</h5>
                    </button>
                  </Link>
                  <button class="btn btn-secondary d-flex align-items-center justify-content-center gap-2 ms-5 " style={{ width: "200px", padding: "7px 10px" }}>
                    <i class="fa-regular fa-heart mb-2" style={{ fontSize: "20px" }}></i>
                    <h5>Add to Wishlist</h5>
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="reviews-box card mb-0">
                <h1 >Reviews</h1>
                <div className="reviews">
                  <div className="review">
                    <img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
                    <h4>James Watter</h4>
                  </div>
                  <div className="rating d-flex ">
                    <p style={{ color: " orange" }}>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </p>
                  </div>
                  <div className="review-content mt-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis molestiae autem explicabo expedita, quae esse sed doloremque ipsam nobis saepe! Nihil molestias quas ipsum quibusdam architecto dolore ea. Porro ducimus voluptatum vero culpa iste esse id iusto voluptates quisquam!</p>
                  </div>
                </div>
              </div>
              <div className="reviews-box card mt-4">
                <h1 >Reviews</h1>
                <div className="reviews ">
                  <div className="review">
                    <img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
                    <h4>James Watter</h4>
                  </div>
                  <div className="rating d-flex ">
                    <p style={{ color: " orange" }}>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </p>
                  </div>
                  <div className="review-content mt-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis molestiae autem explicabo expedita, quae esse sed doloremque ipsam nobis saepe! Nihil molestias quas ipsum quibusdam architecto dolore ea. Porro ducimus voluptatum vero culpa iste esse id iusto voluptates quisquam!</p>
                  </div>
                </div>
              </div>
              <div className="reviews-box card mt-4">
                <h1>Reviews</h1>
                <div className="reviews">
                  <div className="review">
                    <img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
                    <h4>James Watter</h4>
                  </div>
                  <div className="rating d-flex ">
                    <p style={{ color: " orange" }}>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </p>
                  </div>
                  <div className="review-content mt-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis molestiae autem explicabo expedita, quae esse sed doloremque ipsam nobis saepe! Nihil molestias quas ipsum quibusdam architecto dolore ea. Porro ducimus voluptatum vero culpa iste esse id iusto voluptates quisquam!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 ">
              <div className="form p-5 card ">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">User Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-info">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductDetails