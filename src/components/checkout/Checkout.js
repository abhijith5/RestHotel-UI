import React, { Component } from 'react';
import './Checkout.css'

class Checkout extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F7F7F7", height: "100vh" }} className="uk-padding">
        <div className="uk-child-width-1-2 uk-text-center" uk-grid="true">
          <div>

            <div className="uk-card uk-card-default uk-card-body uk-text-left">
              <div className="uk-card uk-card-default uk-card-body" style={{ padding: 0 }}>
                <div className="fresh-cart-side">
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                  <h5>Hydrabad Dum Biriyani</h5>
                </div>

                <div className="uk-flex fresh-cart-item">
                  <p className="uk-text-bold" style={{ paddingLeft: 25 }}>Price:  456</p>

                </div>
              </div>
              <div className="uk-card uk-card-default uk-card-body" style={{ padding: 0 }}>
                <div className="fresh-cart-side">
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                  <h5>Hydrabad Dum Biriyani</h5>
                </div>

                <div className="uk-flex fresh-cart-item">
                  <p className="uk-text-bold" style={{ paddingLeft: 25 }}>Price:  456</p>

                </div>
              </div>
              <div className="uk-text-center" style={{ marginTop: 20 }}>
                <button className="uk-button uk-button-default" style={{ height: "80px" }} uk-toggle="target: #modal-example">Check Availbale coupans</button>
              </div>
              <div className="" style={{ marginTop: 20 }}>

                <div class="uk-grid-small" uk-grid="true">
                  <div class="uk-width-expand" uk-leader="true">Price</div>
                  <div>$20.90</div>
                </div>
                <div class="uk-grid-small" uk-grid="true">
                  <div class="uk-width-expand" uk-leader="true">Packaging Fee</div>
                  <div>$20.90</div>
                </div>
                <div class="uk-grid-small" uk-grid="true">
                  <div class="uk-width-expand" uk-leader="true">GST(5%)</div>
                  <div>$20.90</div>
                </div>
                <div class="uk-grid-small" uk-grid="true">
                  <div class="uk-width-expand" uk-leader="true">CGST(2.5%)</div>
                  <div>$20.90</div>
                </div>
                <div class="uk-grid-small" uk-grid="true">
                  <div class="uk-width-expand" uk-leader="true">sGST(2.5%)</div>
                  <div>$20.90</div>
                </div>
                <hr></hr>

                <div className="uk-child-width-1-2 uk-text-bold" uk-grid="true">
                  <div>
                    <div className="">Payable</div>
                  </div>
                  <div>
                    <div className="uk-text-right">857</div>
                  </div>

                </div>
              </div>
            </div>

            <div id="modal-example" uk-modal="true">
              <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title">Coupans/Offers</h2>
                <div class="uk-margin">
                  <input class="uk-input" type="text" placeholder="Code" />
                </div>
                <p className="uk-text-right">
                  <button className="uk-button uk-button-default uk-modal-close" type="button" style={{ border: "none" }}>Cancel</button>
                  <button className="uk-button uk-button-primary fresh-cart" type="button">Apply</button>
                </p>
              </div>
            </div>


          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <div className="uk-card uk-card-default uk-card-body uk-text-left">
                <h3 className="uk-text-bold">Delivery Time</h3>
                <h6 className="uk-text-bold" style={{ marginTop: 0 }}>Deliver Now</h6>
                <p>Your Deliver within <span className="uk-text-bold">45 minutes</span></p>
              </div>
            </div>
            <div class="uk-card uk-card-default uk-card-body" style={{marginTop:20}}>
              <div className="uk-card uk-card-default uk-card-body uk-text-left" style={{borderBottom:0}}>
               <h3 className="">Delivery Address</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Checkout