import React, { Component } from "react";
import glassData from "../data/dataGlasses.json";

export class GlassesList extends Component {
  selectGlassHandler = (selectedItem) => {
    this.props.onDetailGlass(selectedItem);
  };
  render() {
    return (
      <div className="container">
        <div className="row styleGlasses">
          <div className="listStyleGlasses">
            <ul>
              {glassData.map((item) => {
                return (
                  <li
                    onClick={() => this.selectGlassHandler(item)}
                    key={item.id}
                  >
                    <img src={item.img} alt={item.name} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GlassesList;
