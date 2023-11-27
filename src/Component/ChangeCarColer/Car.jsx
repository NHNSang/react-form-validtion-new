import React, { Component } from 'react'

export default class Car extends Component {
    // Tạo hàm render button có các id trùng tên với đuôi
    // Dùng state và setState() để thay đổi dữ liệu
    state ={
        mauXe: 'black'
    }
    arrButon = [
        {
            mau: 'black'
        },
        {
            mau: 'red'
        },
        {
            mau: 'silver'
        },
        {
            mau: 'steel'
        },
    ]
  render() {
    return (
      <div>
        <h1 className='text-center'>Thay đổi màu xe</h1>
        <div className='row'>
            <div className="col-8">
                <img src={`./img/${this.state.mauXe}-car.jpg`} alt="" />
            </div>
            <div className="col-4">
                {this.arrButon.map((index)=>{
                    return (
                        <button
                        onClick={()=>{this.setState({mauXe: index.mau})}}
                         key={index} className='btn btn-danger px-3 mx-3'>{index.mau}
                         </button>
                    )
                })}
            </div>
        </div>
      </div>
    )
  }
}
