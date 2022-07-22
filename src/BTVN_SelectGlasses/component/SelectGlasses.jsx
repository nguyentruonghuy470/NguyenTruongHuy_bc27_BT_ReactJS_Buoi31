import React, { Component } from "react";
import "../style.css";
import GlassesList from "../component/GlassesList"
import GlasssDetail from "../component/GlasssDetail"

export default class SelectGlasses extends Component {
  constructor() {
    super();

    this.state = {
      product:{},     
    };
  }
  changeGlassesDetail = (itemDetail) => {
    // const imgUrl = `${color}`;
    // const products = data;
    // products.filter((product) => {
    //   if (product.id === id ) {
    //     this.setState({product})
    //   }
      
    // })
    this.setState({ product: itemDetail })
  };
  render() {
    return (
      <div>
        <header className="title">
          <h1>Try Glasses App Online</h1>
        </header>
        <div>
          <GlasssDetail item={this.state.product}/>
          <GlassesList onDetailGlass = {this.changeGlassesDetail}/>
        </div>
      </div>
    );
  }
}
