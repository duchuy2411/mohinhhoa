import React, { useState, useEffect } from "react"

function Header() {
    return (
        <div className="header">
            <div className="hd-row block-middle">
                <img width="13%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRBmntSxZh99CBluc1Y-1vEERXQc9HqBbFg&usqp=CAU"></img>
                <div id="hd-row-search">
                    <img width="5%" src="https://img.icons8.com/ios/50/000000/search--v3.png"></img>
                    <input placeholder="Nhập tên sản phẩm ..."></input>
                </div>
                <div id="hd-row-right">
                    <div className="btn" id="hd-btn">
                        <i className="fa fa-shopping-cart">
                            <span className="count-product-cart">1</span>
                        </i>
                    </div>
                    <div className="btn" id="hd-btn">
                        B
              </div>
                    <div className="btn">
                        Avatar
              </div>
                    <div id="lbl-login">Dang nhap</div>
                </div>
            </div>
            <div className="hd-row block-middle">
                <div className="hd-flex-item">

                </div>
            </div>
        </div>
    )
}

export default Header;