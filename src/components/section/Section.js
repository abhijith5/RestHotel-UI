import React, { Component } from 'react';
import './Section.css'
import Product from '../product/Product';


import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt,Switch } from 'react-router-dom'
const Route = require("react-router-dom").Route;


class Section extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div className="section uk-padding">

          <h2 className="uk-heading-line"><span>{this.props.name}</span></h2>
          <div className="uk-child-width-1-3 uk-text-center" uk-grid="true">
            <div>
              <div className="uk-card uk-card-default" style={{ cursor: "pointer" }} onClick={this.productPage}>
                <div className="uk-text-left" style={{ paddingBottom: 10 }}>
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                  <span className="fresh-category-text">Veg</span>
                </div>

                <div className="uk-card-media-top">
                  <Link to="/food"><img src="https://www.thespruceeats.com/thmb/Rp6iLiEKgeP9gs-QTogt9RRlyAY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" alt="" /></Link>
                </div>
                <div className="uk-card-body uk-text-left" style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <h3 className="uk-card-title">Hydrabad Dum Biriyani</h3>
                  <div className="uk-flex">
                    <p className="uk-text-bold">$ 150</p>
                    <span className="fresh-line">250</span>
                    <p className="uk-text-bold" style={{ marginTop: 0 }}>12% off</p>
                    <div className="">
                      <button class="uk-button uk-button-default fresh-cart" style={{ marginLeft: 40 }} onClick={this.ProductPage}>Pre Order</button>
                    </div>
                  </div>
                  <div className="">
                    <button class="uk-button uk-button-default fresh-hot">Hot Selling</button>

                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="uk-card uk-card-default" style={{ cursor: "pointer" }}>
                <div className="uk-text-left" style={{ paddingBottom: 10 }}>
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                  <span className="fresh-category-text">Veg</span>
                </div>
                <div className="uk-card-media-top">
                  <img src="https://www.thespruceeats.com/thmb/Rp6iLiEKgeP9gs-QTogt9RRlyAY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" alt="" />
                </div>
                <div className="uk-card-body uk-text-left" style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <h3 className="uk-card-title">Hydrabad Dum Biriyani</h3>
                  <div className="uk-flex">
                    <p className="uk-text-bold">$ 150</p>
                    <span className="fresh-line">250</span>
                    <p className="uk-text-bold" style={{ marginTop: 0 }}>12% off</p>
                    <div className="">
                      <button class="uk-button uk-button-default fresh-cart" style={{ marginLeft: 40 }}>Pre Order</button>
                    </div>
                  </div>
                  <div className="">
                    <button class="uk-button uk-button-default fresh-hot">Hot Selling</button>

                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default" style={{ cursor: "pointer" }}>
                <div className="uk-text-left" style={{ paddingBottom: 10 }}>
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                  <span className="fresh-category-text">Veg</span>
                </div>
                <div className="uk-card-media-top">
                  <img src="https://www.thespruceeats.com/thmb/Rp6iLiEKgeP9gs-QTogt9RRlyAY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" alt="" />
                </div>
                <div className="uk-card-body uk-text-left" style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <h3 className="uk-card-title">Hydrabad Dum Biriyani</h3>
                  <div className="uk-flex">
                    <p className="uk-text-bold">$ 150</p>
                    <span className="fresh-line">250</span>
                    <p className="uk-text-bold" style={{ marginTop: 0 }}>12% off</p>
                    <div className="">
                      <button class="uk-button uk-button-default fresh-cart" style={{ marginLeft: 40 }}>Pre Order</button>
                    </div>
                  </div>
                  <div className="">
                    <button class="uk-button uk-button-default fresh-hot">Hot Selling</button>

                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default" style={{ cursor: "pointer" }}>
                <div className="uk-text-left" style={{ paddingBottom: 10 }}>
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                  <span className="fresh-category-text">Veg</span>
                </div>
                <div className="uk-card-media-top">
                  <img src="https://www.thespruceeats.com/thmb/Rp6iLiEKgeP9gs-QTogt9RRlyAY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" alt="" />
                </div>
                <div className="uk-card-body uk-text-left" style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <h3 className="uk-card-title">Hydrabad Dum Biriyani</h3>
                  <div className="uk-flex">
                    <p className="uk-text-bold">$ 150</p>
                    <span className="fresh-line">250</span>
                    <p className="uk-text-bold" style={{ marginTop: 0 }}>12% off</p>
                    <div className="">
                      <button class="uk-button uk-button-default fresh-cart" style={{ marginLeft: 40 }}>Pre Order</button>
                    </div>
                  </div>
                  <div className="">
                    <button class="uk-button uk-button-default fresh-hot">Hot Selling</button>

                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default" style={{ cursor: "pointer" }}>
                <div className="uk-text-left" style={{ paddingBottom: 10 }}>
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                  <span className="fresh-category-text">Veg</span>
                </div>
                <div className="uk-card-media-top">
                  <img src="https://www.thespruceeats.com/thmb/Rp6iLiEKgeP9gs-QTogt9RRlyAY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" alt="" />
                </div>
                <div className="uk-card-body uk-text-left" style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <h3 className="uk-card-title">Hydrabad Dum Biriyani</h3>
                  <div className="uk-flex">
                    <p className="uk-text-bold">$ 150</p>
                    <span className="fresh-line">250</span>
                    <p className="uk-text-bold" style={{ marginTop: 0 }}>12% off</p>
                    <div className="">
                      <button class="uk-button uk-button-default fresh-cart" style={{ marginLeft: 40 }}>Pre Order</button>
                    </div>
                  </div>
                  <div className="">
                    <button class="uk-button uk-button-default fresh-hot">Hot Selling</button>

                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default" style={{ cursor: "pointer" }}>
                <div className="uk-text-left" style={{ paddingBottom: 10 }}>
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                  <span className="fresh-category-text">Veg</span>
                </div>
                <div className="uk-card-media-top">
                  <img src="https://www.thespruceeats.com/thmb/Rp6iLiEKgeP9gs-QTogt9RRlyAY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" alt="" />
                </div>
                <div className="uk-card-body uk-text-left" style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <h3 className="uk-card-title">Hydrabad Dum Biriyani</h3>
                  <div className="uk-flex">
                    <p className="uk-text-bold">$ 150</p>
                    <span className="fresh-line">250</span>
                    <p className="uk-text-bold" style={{ marginTop: 0 }}>12% off</p>
                    <div className="">
                      <button className="uk-button uk-button-default fresh-cart" style={{ marginLeft: 40 }}>Pre Order</button>
                    </div>
                  </div>
                  <div className="">
                    <button className="uk-button uk-button-default fresh-hot">Hot Selling</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
      </div>
    )
  }
}

export default Section