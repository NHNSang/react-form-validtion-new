import React, { Component } from "react";

export default class TableUser extends Component {
  render() {
    const {arrNguoiDung, handleDelete , getValueUser} = this.props
    return (
      <div className="">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Mã người dùng</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Chức vụ</th>
              <th scope="col">Giới tính</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            
            {arrNguoiDung.map((item,index)=>{
                const {maNguoiDung, hoTen,soDienThoai,email,chucVu,gioiTinh  } = item
                return (
                    <tr>
                <td>{maNguoiDung}</td>
                <td>{hoTen}</td>
                <td>{soDienThoai}</td>
                <td>{email}</td>
                <td>{chucVu}</td>
                <td>{gioiTinh}</td>
                <td>
                    <button 
                    onClick={()=>{
                      getValueUser(item)
                    }}
                    className="btn btn-danger mx-2">
                        <i class="fa-regular fa-clipboard"></i>
                    </button>
                    <button 
                    onClick={()=>{
                        handleDelete(maNguoiDung)
                    }}
                    className="btn btn-dark">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
