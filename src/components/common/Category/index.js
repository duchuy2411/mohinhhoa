import React, { useState, useEffect } from "react"

function Category() {
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
    }
    
    return (
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
            {category ?
                <div className="section-hover">
                    {content_cate}
                </div>
                : <></>
            }
        </div>
    )
}

export default Category;