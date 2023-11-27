import React, { Component } from 'react'

export default class DienThoai extends Component {
  render() {
    console.log(this.props.newDt)
    const {tenSP,rom} = this.props.newDt
    console.log(this.props.updateDetail)
    return (
      <div>
        <img
                  className="card-img-top"
                  src=""
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title">{tenSP}</h4>
                  <p className="card-text">{rom}</p>
                </div>
                <button className='btn btn-dark px-4' onClick={()=>{
                    this.props.updateDetail(this.props.newDt)
                }}>Xem chi tiết</button>
                <button className='btn btn-danger'>Thêm giỏ hàng</button>
      </div>
    )
  }
}
