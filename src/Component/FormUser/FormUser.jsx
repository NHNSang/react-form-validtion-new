import React, { Component } from "react";

export default class FormUser extends Component {
  render() {
    console.log(this.props);
    const { errors, values, handleOnChange, handleSubmit ,handleUpdateValue } = this.props;
    return (
      <div>  
        <form id="form_user" onSubmit={handleSubmit}>
        <div className="form-row row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Mã người đùng</label>
            <input
              type="text"
              className="form-control"
              id="maNguoiDung"
              placeholder="Nhập mã người dùng"
              value={values.maNguoiDung}
              onChange={(event) => {
                const { value, id } = event.target;
                handleOnChange(value, id);
              }}
            />
            <p>{errors.maNguoiDung}</p>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Họ tên</label>
            <input
              type="text"
              className="form-control"
              data-validation = 'string'
              id="hoTen"
              placeholder="Nhập tên người dùng"
              value={values.hoTen}
              onChange={(event) => {
                const { value, id } = event.target;
                // gọi data attribute của phần tử html 
                let valueAttribute =  event.target.getAttribute('data-validation')
                console.log(valueAttribute)
                handleOnChange(value, id,valueAttribute);
              }}
            />
            <p>{errors.hoTen}</p>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="soDienThoai"
              placeholder="Nhập số điện thoại"
              value={values.soDienThoai}
              onChange={(event) => {
                const { value, id } = event.target;
                handleOnChange(value, id);
              }}
            />
            <p>{errors.soDienThoai}</p>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Nhập email người dùng"
              value={values.email}
              onChange={(event) => {
                const { value, id } = event.target;
                handleOnChange(value, id);
              }}
            />
            <p>{errors.email}</p>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Chức vụ</label>
            <select
              id="chucVu"
              class="form-control"
              value={values.chucVu}
              onChange={(event) => {
                const { value, id } = event.target;
                handleOnChange(value, id);
              }}
            >
              <option selected>Chọn chức vụ</option>
              <option>Giám Đốc</option>
              <option>Trưởng phòng</option>
              <option>Nhân viên</option>
            </select>
            <p>{errors.chucVu}</p>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Giới tính</label>
            <select
              id="gioiTinh"
              class="form-control"
              value={values.gioiTinh}
              onChange={(event) => {
                const { value, id } = event.target;
                handleOnChange(value, id);
              }}
            >
              <option selected>Chọn giới tính</option>
              <option>NAM</option>
              <option>NỮ</option>
            </select>
            <p>{errors.gioiTinh}</p>
          </div>
        </div>
        <div className="text-center py-3">
          <button  type="submit" class="btn btn-primary btn-sm mx-3">
            Thêm người dùng
          </button>
          <button
          typeof="button"
          onClick={handleUpdateValue}
           type="button" class="btn btn-secondary btn-sm mx-3">
            Cập nhập người dùng
          </button>
        </div>
        </form>
      </div>
    );
  }
}
