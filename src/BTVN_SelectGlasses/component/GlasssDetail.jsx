import React, { Component } from "react";

export class GlasssDetail extends Component {
  render() {
    const { url, price, name, desc } = this.props.item;

    return (
      <div className="row">
        <div className="col-sm-4 avatar">
          <img
            className="img1"
            src="/img/glassesImage/model.jpg"
            alt=""
            height="400px"
            width="400px"
          />
          {url && <img id="img2" className="img2" src={url}></img> }
          {desc && name && price && (
            <div className='glass-detail'>
              <div>
                <h4 className="namedetail">{name}</h4>
                <p className="desc">{desc}</p>
                <span className="cont">Price: {price} $ </span>
              </div>
            </div>
          )}
        </div>
        <div className="col-sm-3">
          <img
            className="img3"
            src="/img/glassesImage/model.jpg"
            alt="car"
            height="400px"
            width="400px"
          />
        </div>
      </div>
    );
  }
}
export default GlasssDetail;
