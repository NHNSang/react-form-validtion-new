import React, { Component } from "react";
import FormUser from "./FormUser";
import TableUser from "./TableUser";
import { checkEmptyValue } from "../../until/validation.jsx";
import { checkPhoneNumberValue } from "../../until/validation.jsx";
import { checkEmailValue } from "../../until/validation.jsx";
import { checkIsString } from "../../until/validation.jsx";

export default class DemoForm extends Component {
  state = {
    values: {
      maNguoiDung: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
      chucVu: "",
      gioiTinh: "",
    },
    errors: {
      maNguoiDung: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
      chucVu: "",
      gioiTinh: "",
    },
    arrNguoiDung: [],
  };

  handleOnChangeValue = (value, id,valueAttribute) => {
    // validation dữ liệu
    // 1. Tạo ra 1 đối tượng newError từ state
    let newErrors = {...this.state.errors}
    // Kiểm tra dữ liệu: TH1 kiểm tra rỗng
    let checkEmpty = checkEmptyValue(value,id,newErrors)
    // Kiểm tra nếu checkEmpty mà trả về true nghĩa là  ko còn bị lỗi từ trường dữ liệu rỗng , lúc đó sẽ thực hiện các validation còn lại
    // 2. Dùng các hàm kiểm tra validation để kiểm tra dữ liệu và thêm thông báo vào đối tượng newError
    if(checkEmpty){
      // Kiểm tra input số điẹn thoại
      if(id == 'soDienThoai'){
        checkPhoneNumberValue(value,id, newErrors)
      };
      // Kiểm tra email
      if(id == 'email'){
        checkEmailValue(value, id, newErrors)
      }
      if(valueAttribute = 'string'){
        checkIsString(value,id,newErrors)
      }
    }
    // 3. Dùng phương thức setState để cập nhập lại state

    // -----------------------
    // Tạo ra 1 object mới từ object trong values của state
    let newValues = { ...this.state.values };
    // gọi tới thuộc tính trùng với id của input và cập nhập lại dữ liệu
    // id = maNguoiDung = FE123213
    newValues[id] = value;

    // Gọi tới setState để update lại dữ liệu
    this.setState({
      values: newValues,
      errors: newErrors
    });
  };

  // Thêm người dùng vào mãng
  handleSubmitValue = (event) => {
    event.preventDefault()
    
    // Kiểm tra trước khi thêm vào mãng
    // 1. dùng vòng lặp để thêm đối tượng, xem các dữ liệu được thêm vào có bị lỗi hay ko, nếu có thì trả vễ error, nếu ko thì sẽ thêm vào ==> xử dùng vòng lặp for in 
    // 2. Dùng thêm vòng lặp xem đối tượng value có lưu trữ giá trị hay ko, nếu có dữ liệu rỗng sẽ có thông báo cho người dùng và ko cho thêm dữ liệu ===> xử dùng vòng lặp for in
    let isValid = true; 
    for(let key in this.state.errors){
      if(this.state.errors[key] != ''){
        isValid = false
      }
    }
    // Nếu mã người dùng đã có trong mãng và ko thêm dữ liệu và thông báo lôĩ
    // lấy dữ liệu đã lưu trữ trong state là thuộc tính maNguoiDung, đại diện cho dữ liệu người dùng đã nhập trên giao diện
    // dùng hàm find trong array dể kiểm tra xem thử trong mãng có maNguoiDung đã có chưa, nếu có thì thông báo, nêu ko thì cho người dùng nhập 
    let checkNguoiDUng = this.state.arrNguoiDung.find((item)=>{
      return item.maNguoiDung == this.state.values.maNguoiDung
    })
    if(!checkNguoiDUng){
      //  Ở đâu chưa có dữ liệu bị trùng
    }else{
      // Có dữ liệu nen id bị trùng
      isValid = false
      let newErrors = {...this.state.errors}
      newErrors.maNguoiDung = ' Mã người dùng đã bị trùng'
      this.setState({
        errors: newErrors
      })
    }

    for(let key in this.state.values){
      if(this.state.values[key] == ''){
        isValid = false
      }
    }
    if(isValid == true){
      let newArrNguoiDung = [...this.state.arrNguoiDung];
      newArrNguoiDung.push(this.state.values);
      console.log(newArrNguoiDung);
      this.setState({
          arrNguoiDung: newArrNguoiDung,
      });
      document.getElementById('form_user').reset();
    }

  };

//   Hàm xoá người dùng
handleDeleteValue=(id)=>{
    // Khi xoá cần id người xoá
    // Tìm vị trí của phần tử trong màng, dùng findIndex để tìm, lưu ý khi tìm có 2 trường hợp xảy ra, có hoặc ko
    // gọi tới mãng lưu trữ dữ liệu người dùng, dùng hàm splice, để cập nhập lại
    let newArrNguoiDung = [...this.state.arrNguoiDung]
    let index = newArrNguoiDung.findIndex((item)=>{
        return item.maNguoiDung == id
    })
    if(index != -1){
        newArrNguoiDung.splice(index,1)
        this.setState({
            arrNguoiDung: newArrNguoiDung
        })
    }
}

getValueUser =(nguoiDung)=>{
  // đầu tiên nhận vào maNguoiDung của phầN tử muốn cập nhập
  // Sau khi nhận dữ liệu đÓ lên giao diện thông qua thuộc tính value trên state
  this.setState({
    values: nguoiDung
  })
}

// Cập nhập lại thông tin người udungf
handleUpdateValue=()=>{
  // Kiểm tra các errortrươc khi cập nhập, state.erro, state.values 
  // lấy ra id của người dùng có trên giao diện và thực hiện tìm kiếm phần tử trong mãng, nếu tìm được thì cập nhập lịa
  let isValid = true
  for(let key in this.state.errors){
    if(this.state.errors[key] != ''){
      isValid = false
    }
  }
  if(isValid){
    let newArrNguoiDung = [...this.state.arrNguoiDung]
    let index = newArrNguoiDung.findIndex((item)=>{
      return item.maNguoiDung == this.state.values.maNguoiDung  
    }) 
    if(index != -1){
      newArrNguoiDung[index] = this.state.values
      this.setState({
        arrNguoiDung: newArrNguoiDung
      })
    }
  }
}
  render() {
    // console.log(this.state.values);
    console.log(this.state.arrNguoiDung)
    return (
      <div className="container">
        <h1 className="text-center py-3">Bài tập về Fomr trong React</h1>
        <FormUser
        handleUpdateValue = {this.handleUpdateValue}
            handleSubmit = {this.handleSubmitValue}
          handleOnChange={this.handleOnChangeValue}
          values={this.state.values}
          errors={this.state.errors}
        ></FormUser>
        <h2 className="text-center py-3">Danh sách người dùng</h2>
        <TableUser
        getValueUser = {this.getValueUser}
        handleDelete = {this.handleDeleteValue}
        arrNguoiDung ={this.state.arrNguoiDung}
        ></TableUser>
      </div>
    );
  }
}
