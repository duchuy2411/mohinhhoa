import "./customLogo.png"
import "./images.jpeg"
import './App.css';

import React, { useState, useEffect } from "react"

function App() {
  const [nav, setNav] = useState(["Trang chu","#ZINGCHART", "MOI PHAT HANH", "TOP 100", "CHU DE", "MV", "ALBUM", "NGHE SI", "NHAC CA NHAN"]);
  const [category, setCategory] = useState(false);

  const [content_cate, setContentCate] = useState("");

  const handleHover = (text) => {
    setCategory(true);
    
    setContentCate(text);
  }

  const handleKeepHover = () => {
    
  }

  const handleHoverOut = () => {
    setCategory(false);
    console.log("out");
  }


  return (
    <div className="App">
      <div className="header">
          <div className="hd-row block-middle">
            <img width="13%" src="https://sites.google.com/site/taizingmp32017/_/rsrc/1509441614107/config/customLogo.gif?revision=11"></img>
            <div id="hd-row-search">
              <img width="5%" src="https://img.icons8.com/ios/50/000000/search--v3.png"></img>
              <input placeholder="Nhap ten bai hat, hoac ca si..."></input>
            </div>
            <div id="hd-row-right">
              <div className="btn" id="hd-btn">
                A
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
            { nav.map((ind,key) => { return (
                <div className="hd-nav-item" key={key}>
                  { ind }
                </div>
              )}
            )}
            </div>
          </div>
      </div>
      <div className="body" >
        <img src="https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat-3_800x450.jpg" />
        <div className="gr-hover" onMouseLeave={handleHoverOut} onMouseOver={handleKeepHover}>
          <div className="body-l-card">
            <div className="bd-l-c-section" onMouseOver={() => handleHover("Laptop")}>
              <i className="fa fa-laptop"></i> Laptop & Macbook
            </div>
            <div className="bd-l-c-section" onMouseOver={() => handleHover("Tivi")}>
              <i className="fa fa-tv"></i> Tivi - Màn hình TV
            </div>
            <div className="bd-l-c-section" onMouseOver={() => handleHover("Dien may")}>
              <i className="fa fa-hdd"></i> Điện máy - điện gia dụng
            </div>
            <div className="bd-l-c-section" onMouseOver={() => handleHover("Dien thoai")}>
              <i className="fa fa-mobile-alt"></i> Điện thoại & Thiết bị thông minh
            </div>
            <div className="bd-l-c-section" onMouseOver={() => handleHover("May tinh dong bo")}>
              <i className="fa fa-desktop"></i> PC - Máy tính đồng bộ
            </div>
            <div className="bd-l-c-section" onMouseOver={() => handleHover("Man hinh may tinh")}>
              <i className="fa fa-desktop"></i> Màn hình máy tính
            </div>
          </div>
          { category ? 
          <div className="section-hover">
            {content_cate}
          </div> 
          : <></>
          }
        </div>

        <div className="section-body">
          <div className="card">

          </div>
          <div className="card">
            
          </div>
          <div className="card">
            
          </div>
          <div className="card">
            
          </div>
        </div>

        <div className="section-body">
          <img src="https://thietkehaithanh.com/wp-content/uploads/2019/01/thietkehaithanh-banner-laptop-800x300.png" />
        </div>

      </div>
      <div className="footer">
      </div>
  </div>
  );
}

export default App;
