import React, { Component } from "react";

export default class DemoMang2 extends Component {
  hocSinh = [
    { tenHs: "Sang", tuoiHs: 20, noiO: "Đà Nẵng" },
    { tenHs: "Quyên", tuoiHs: 22, noiO: "Đà Nẵng" },
    { tenHs: "Ân", tuoiHs: 20, noiO: "Hà Nội" },
  ];
  renderHocSinh = () => {
    // let contentBody = [];
    // contentBody = this.hocSinh.map(
    //     (newHocSinh,index)=>{
    //         return(
    //             <tr key={index}>
    //                 <td>{newHocSinh.tenHs}</td>
    //                 <td>{newHocSinh.tuoiHs}</td>
    //                 <td>{newHocSinh.noiO}</td>
    //             </tr>
    //         )
    //     }
    // )
    // return contentBody
    return this.hocSinh.map((newHocSinh, index) => {
      return (
        <tr key={index}>
          <td>{newHocSinh.tenHs}</td>
          <td>{newHocSinh.tuoiHs}</td>
          <td>{newHocSinh.noiO}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h1>Demo Mãng 2</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Tên</th>
                <th>Tuổi</th>
                <th>Nơi ở</th>
              </tr>
            </thead>
            <tbody>{this.renderHocSinh()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
