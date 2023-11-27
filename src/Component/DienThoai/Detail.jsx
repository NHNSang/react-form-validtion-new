import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    console.log(this.props.detail)
    const {tenSP,manHinh,cameraTruoc,giaBan} = this.props.detail
    return (
      <div>
        <h1>Xem chi tiết</h1>        
            <p>{tenSP}</p>
            <p>{manHinh}</p>
            <p>{cameraTruoc}</p>
            <p>{giaBan}</p>
      </div>
    )
  }
}
