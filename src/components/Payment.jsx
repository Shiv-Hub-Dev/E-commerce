import React from 'react'

function Payment() {
  return (
    <>
      <div className="payment-page border ">
        <h2>Confirm Your Payment</h2>
        <div className="payment-body">
          <form class="row g-3">
            <div class="col-md-9">
              <label for="inputEmail4" class="form-label">Owner</label>
              <input type="text" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">CVV</label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label">Card Number</label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div className="payment-method d-flex justify-content-between">
              <div className="col-md-5">
                <h4>Expiry Date</h4>
                <div className="date d-flex gap-3">

                  <div class="col-md-4">
                    <label for="inputState" class="form-label">Year</label>
                    <select id="inputState" class="form-select">
                      <option >2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                      <option>2032</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">Month</label>
                    <select id="inputState" class="form-select">
                      <option >Jan</option>
                      <option>Feb</option>
                      <option>Mar</option>
                      <option>Apr</option>
                      <option>May</option>
                      <option>Jun</option>
                      <option>Jul</option>
                      <option>Aug</option>
                      <option>Sep</option>
                      <option>Oct</option>
                      <option>Nov</option>
                      <option>Dec</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="images d-flex ms-5 ps-5 mt-5">
                  <img src="https://s3.amazonaws.com/freebiesupply/large/2x/mastercard-logo-png-transparent.png" alt="" />
                  <img src="https://www.freepnglogos.com/uploads/visa-hd-transparent-logo-6.6125175268389285" alt="" />
                  <img src="https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Picture.png" alt="" />

                </div>
              </div>
            </div>
            <div class="col-12 mt-4 ">
              <button type="submit" class="btn btn-danger w-100">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Payment