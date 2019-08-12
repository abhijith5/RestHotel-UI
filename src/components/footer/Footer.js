import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="uk-child-width-1-2 uk-text-center fresh-footer" uk-grid="true">
          <div>
            <div className="uk-card uk-card-default uk-card-body" style={{ borderBottom: 0 }}>
              <div className="uk-child-width-1-3 uk-text-center" uk-grid="true">
                <div>
                  <div className="uk-card uk-card-default uk-card-body" style={{ padding: 0, borderBottom: 0 }}>
                    <h5>Company</h5>
                    <ul className="uk-list fresh-footer-ul">
                      <li>FAQ</li>
                      <li>About</li>
                      <li>Career</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-card-body" style={{ padding: 0, borderBottom: 0 }}>
                    <h5>HELP & CONTACT</h5>
                    <ul className="uk-list">
                      <li>Help Center</li>
                      <li>Emial</li>
                      <li>0878787879</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-card-body" style={{ padding: 0, borderBottom: 0 }}>
                    <h5>MORE FROM US</h5>
                    <ul className="uk-list">
                      <li>Bulk/Party Order</li>
                      <li>Fresh Club</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-text-left" style={{ borderBottom: 0 }}>
              <h4>NewsLetter</h4>
              <input class="uk-input" type="text" placeholder="Input" style={{ borderRadius: 10 }} />
              <div className="fresh-bottom-social uk-text-left">
                <i className="fab fa-android" style={{color:"#00F075"}}></i>
                <i className="fab fa-app-store" style={{color:"#189BEF"}}></i>
              </div>
            </div>
          </div>

        </div>
        <div className="uk-text-center fresh-footer" style={{paddingTop:20}}>
          <p>Copyright FreshMenu</p>
        </div>
      </div>
    )
  }
}

export default Footer