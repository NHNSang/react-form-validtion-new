// Hàm kiểm tra dữ liệu rổng
export const checkEmptyValue =(value,id,error)=>{
    if( value == ''){
        error[id] = 'Vui lòng nhập dữ liệu';
        return false
    }else{
        error[id] = ''
        return true 
    }
};

// Kiểm tra điện thoại
export const checkPhoneNumberValue =(value,id,error)=>{
    // Tạo biến chứa chuỗi regex number
    let regexPhoneNumber =  /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    // Kiểm tra điều kiệN
    if(regexPhoneNumber.test(value)){
        // Xoá thông báo người dùng khỏi đối tượng error
        error[id]= ''
        return true
    }else{
        // Hiện thông báo người dùng
        error[id] = 'Vui lòng nhập đúng số điện thoại'
        return false
    }

};

// Kiểm tra email
export const checkEmailValue =(value,id,error)=>{
    // Tạo hàm chưa chuỗi regex email
    let regexEmail =       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(value)){
        // Xoá thông báo lỗi trong error
        error[id] = ''
        return true
    }else{
        error[id] = 'Vui lòng nhập đúng định dạng email'
        return false
    }

};

// Kiểm tra chuỗi
export const checkIsString =(value,id,error)=>{
    // Tạo hàm chứa chuỗi regex có chưa số hay ko
    let regexString = /^[^0-9]*$/;
    if(regexString.test(value)){
        // Xoá các thôgn báo lỗi khỏi đối tượng erro
        error[id] = ''
        return true
    }else{
        error[id] = 'Vui lòng nhập chữ'
        return false
    }
};
