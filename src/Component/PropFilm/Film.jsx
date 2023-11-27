import React, { Component } from "react";

export default class Film extends Component {
    
  render() {
    const { hinhAnh, moTa, tenPhim } = this.props.phim_input;
    return (
      <div>
        <div className="card text-start">
          <img className="card-img-top" src={hinhAnh} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{tenPhim}</h4>
            <p className="card-text">{moTa}</p>
          </div>
        </div>
      </div>
    );
  }
}
