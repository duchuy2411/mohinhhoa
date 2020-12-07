import "./customLogo.png"
import "./images.jpeg"
import './App.css';

import ComboCard4 from "./components/Cards/ComboCard4"
import CommmonCard from "./components/Cards/CommonCard"

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
            <img width="13%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRBmntSxZh99CBluc1Y-1vEERXQc9HqBbFg&usqp=CAU"></img>
            <div id="hd-row-search">
              <img width="5%" src="https://img.icons8.com/ios/50/000000/search--v3.png"></img>
              <input placeholder="Nhập tên sản phẩm ..."></input>
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
            <img src="https://lh3.googleusercontent.com/BdoRaaplaDNYSYRbYGinL43LaoWGrnansdiMDgawSksBM7NxlERC0SoVgvUh4H8rRnUCVHVNOxGvD7flVmNh=rw" />
          </div>
          <div className="card">
            <img src="https://lh3.googleusercontent.com/sgQpul0smf3zXy4JOgD7OLzhadi_PbhS2FzocH5rv8rayiKyREPBgCAmlZE_YWuXTb6S1D5kExErV6PCOQ=rw" />
          </div>
          <div className="card">
            <img src="https://lh3.googleusercontent.com/l2y1xkUV5p_aRjxyiqIQ9yyvj9vqukSKf2A2l3vd3tcnU9FefzFCScndOuyWil3w98rG618FEsz-t-moEYeI=rw" />
          </div>
          <div className="card">
            <img src="https://lh3.googleusercontent.com/w9mrW6_W7yVglkXPNlhRTXvOzl02Fazc1425qJBzrD2oxQ9Zk0Qwi7pOLjUr9ws8YUB5EC9ooNi8XXD94hc=rw" />
          </div>
        </div>

        <div className="section-body">
          <img src="https://thietkehaithanh.com/wp-content/uploads/2019/01/thietkehaithanh-banner-laptop-800x300.png" />
        </div>

        <div className="section-body">
          <ComboCard4 />
          <ComboCard4 />
          <ComboCard4 />
          <ComboCard4 />
        </div>

        <div className="section-body">
        <div className="section-title">
          Sản phẩm khác ...
        </div>
          <CommmonCard />
          <CommmonCard />
          <CommmonCard />
          <CommmonCard />
          <CommmonCard />
          <CommmonCard />
          <CommmonCard />
          <CommmonCard />
          <CommmonCard />
        </div>

      </div>
      <div className="footer">
      </div>
  </div>
  );
}

export default App;
