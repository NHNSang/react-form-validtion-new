import React, { Component } from "react";

export default class Model extends Component {
  render() {
    console.log(this.props.newArrModel)
    const{maSP,tenSP,
        soLuong,
        giaBan,
        } = this.props.newState
    return (
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
            style={{ maxWidth: "800px", width: "800px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <table
                    className="table table-striped
              table-hover	
              table-borderless
              table-primary
              align-middle"
                  >
                    <thead className="table-light"></thead>
                    <caption>Table Name</caption>
                    <thead>
                      <tr>
                        <th>Mã Sp</th>
                        <th>Hình ảnh</th>
                        <th>Tên</th>
                        <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <td>{maSP}</td>
                            <td>ââ</td>
                            <td>{tenSP}</td>
                            <td>{soLuong}</td>
                            <td>{giaBan}</td>
                            <td>{giaBan*soLuong}</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
