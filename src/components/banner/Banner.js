import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="uk-position-relative uk-visible-toggle uk-light fbox" tabIndex="-1" uk-slider="true">
          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
            <li>
              <img src="http://www.gografix.xyz/wp-content/uploads/2017/04/GraphicRiver-Food-Promotion-Flyer-Poster-17204771-thumbnail.jpg" alt="" />
              <div className="uk-position-center uk-panel"><h1>5</h1></div>
            </li>
            <li>
              <img src="http://www.gografix.xyz/wp-content/uploads/2017/04/GraphicRiver-Food-Promotion-Flyer-Poster-17204771-thumbnail.jpg" alt="" />
              <div className="uk-position-center uk-panel"><h1>5</h1></div>
            </li>  <li>
              <img src="http://www.gografix.xyz/wp-content/uploads/2017/04/GraphicRiver-Food-Promotion-Flyer-Poster-17204771-thumbnail.jpg" alt="" />
              <div className="uk-position-center uk-panel"><h1>5</h1></div>
            </li>  <li>
              <img src="http://www.gografix.xyz/wp-content/uploads/2017/04/GraphicRiver-Food-Promotion-Flyer-Poster-17204771-thumbnail.jpg" alt="" />
              <div className="uk-position-center uk-panel"><h1>5</h1></div>
            </li>  <li>
              <img src="http://www.gografix.xyz/wp-content/uploads/2017/04/GraphicRiver-Food-Promotion-Flyer-Poster-17204771-thumbnail.jpg" alt="" />
              <div className="uk-position-center uk-panel"><h1>5</h1></div>
            </li>  <li>
              <img src="http://www.gografix.xyz/wp-content/uploads/2017/04/GraphicRiver-Food-Promotion-Flyer-Poster-17204771-thumbnail.jpg" alt="" />
              <div className="uk-position-center uk-panel"><h1>5</h1></div>
            </li>
          </ul>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

        </div>
      </div>
    )
  }
}

export default Banner