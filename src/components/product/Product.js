import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
  render() {
    return (
      <div>
        <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <img src="https://www.thespruceeats.com/thmb/Rp6iLiEKgeP9gs-QTogt9RRlyAY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" />
              <div>
                <i class="fab fa-facebook-square fresh-soc" style={{ color: "#2C4271" }}></i>
                <i class="fab fa-twitter-square fresh-soc" style={{ color: "#5EA7D3" }}></i>
                <i class="fab fa-pinterest-square fresh-soc" style={{ color: "#C13D3A" }}></i>
              </div>
            </div>

          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-text-left" style={{ paddingLeft: 0, borderBottom: 0 }}>
              <div className="fresh-product">
                <h3>Hydrabad Dum Biriyani</h3>
                <div className="fresh-product-f">
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15"></img>
                  <span style={{ paddingLeft: 10 }}>Veg</span>
                </div>
                <div className="uk-flex">
                  <p className="uk-text-bold">$ 150</p>
                  <span className="fresh-line">250</span>
                  <p className="uk-text-bold" style={{ marginTop: 0 }}>12% off</p>
                  <div className="">
                    <button class="uk-button uk-button-default fresh-cart" style={{ marginLeft: 40 }}>Add to Cart</button>
                  </div>
                </div>
                <div className="product-details" style={{ marginTop: 30 }}>
                  <h3>DETAILS ABOUT THIS MEAL</h3>
                  <p>A mix of bite sized pineapple, watermelon, muskmelon, papaya, apple, pomegranate; perfect to brighten up your day in the morning and fuel you up for the rest of the day.</p>
                  <h3>INGREDIENTS</h3>
                  <p>Watermelon, Apple, Muskmelon, Pineapple, Papaya, Pomegranate, Honey, Mint Leaf</p>
                  <h3>NUTRITION</h3>
                  <ul class="uk-list uk-list-divider">
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product