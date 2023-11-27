import React, { Component } from "react";

export default class DemoMang extends Component {
  state = [
    { maSp: 1, tenSp: "Iphone", gia: 3000 },
    { maSp: 2, tenSp: "SamSung", gia: 4000 },
    { maSp: 3, tenSp: "Nokia", gia: 5000 },
  ];
  // Viết phương thức để rẻnder lên giao diẹn
  render = () => {
    let contentBody = [];
    contentBody = this.state.map((renderSanPham,index) => {
      return (
        <tr key={index}>
          <td>{renderSanPham.maSp}</td>
          <td>{renderSanPham.tenSp}</td>
          <td>{renderSanPham.gia}</td>
        </tr>
      );
    });
    return contentBody

    // let contentBody = []
    // for(let i = 0 ; i <this.state.length ; i++){
    //     const renderSanPham = this.state[i];
    //     contentBody.push(
    //         <tr key={i}>
    //             <td>{renderSanPham.maSp}</td>
    //             <td>{renderSanPham.tenSp}</td>
    //             <td>{renderSanPham.gia}</td>
    //         </tr>
    //     )
    // }
    // console.log(contentBody)
    // return contentBody
  };
  render() {
    return (
      <div>
        <h1>Demo vòng lặp</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>{this.render()}</tbody>
        </table>
      </div>
    );
  }
}
