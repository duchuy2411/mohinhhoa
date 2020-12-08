import React, {useState, useEffect} from "react"
import CommonCard from "../Cards/CommonCard"
import "./style.css"

function ProductPage () {
    return (
        <div className="content-product">
            <i className="fa fa-home"></i>
            <span> > </span>
            <div className="product-title">
                Chuột máy tính không dây Logitech M171 (Xanh)
            </div>
            <div className="product">
                <div className="product-left">
                    <div className="pro-l-l">
                        <img className="p-img" src="https://lh3.googleusercontent.com/AZudAZyQInOPJohqiqQzDA9GysU4vJrHnwd3ysOeEAaIPknyw4x21_AZsM72u2LG6WTXbgXiCNXitqqDKw=w500-rw" />
                        <div className="p-sub-img">
                            <img src="https://lh3.googleusercontent.com/AZudAZyQInOPJohqiqQzDA9GysU4vJrHnwd3ysOeEAaIPknyw4x21_AZsM72u2LG6WTXbgXiCNXitqqDKw=w500-rw" />
                            <img src="https://lh3.googleusercontent.com/8e1p3q2GAOesgcS1kskhLXhAeh-fSuvIwDlJUtRitlBvO3JyScSJl2AbABqysT0MEoP1_mpTjvWfaiqmkXw=w500-rw" />
                            <img src="https://lh3.googleusercontent.com/YZ_ftODbXOUaMNxOhuCxRi-bMmlWCdQ-pob30LY1sM3fIZ--EiSL4O3k9FcQDStgbsvMMbKstnT2thM1ww4=w500-rw" />
                            <img src="https://lh3.googleusercontent.com/MKEMrvn9muhY8Wfgsz0ZEeoEcO7V3_52eMczm1wJctuveELvSvBpPe-vJ_nTQgqrb95OaWSZk6QSfJRHma8=w500-rw" />
                        </div>
                        <hr/>
                        <div className="p-description">
                            KÍCH THƯỚC Chuột (cao x rộng x dài): 97,7 mm x 61,5 mm x 35,2 mm Khối lượng chuột: 70,5 g bao gồm pin Đầu thu nano (cao x rộng x dài): 6,6 x 14,4 x 18,7 mm Khối lượng đầu thu nano: 2,0 g YÊU CẦU HỆ THỐNG Windows 7, Windows 8, Windows 10 trở lên Mac OS X 10.8 trở lên Chrome OS™ Linux® kernel 2.6+ Cổng USB THÔNG SỐ KỸ THUẬT Loại kết nối: 2.4 Ghz không dây Phạm vi không dây: 10 m Pin: 1 x AA Tuổi thọ pin: 1 năm
                        </div>
                    </div>

                    <div className="pro-l-r">
                        <div className="p-title">Chuột máy tính không dây Logitech M171 (Xanh)</div>
                        <div className="p-branch">Thương hiệu <strong>LOGITECH</strong> | SKU: 1600596</div>
                        <div className="p-price">284.000d</div>
                        <div className="p-gr">
                            <div className="p-btn p-buy">MUA NGAY</div>
                            <div className="p-btn p-add">THÊM VÀO GIỎ HÀNG</div>
                        </div>
                        <hr />
                        <div className="p-sale">
                            <ul>Khuyến mãi liên quan</ul>
                            <li>
                                Nhập mã PHONGVU200 giảm thêm 5% tối đa 200.000đ khi thanh toán qua VNPAY-QR. <a>Xem chi tiết</a>
                            </li>
                            <li>
                                [12.12] Giảm 12% tất cả sản phẩm đến 2 triệu* (trừ CPU, thẻ nạp điện thoại và iPhone 12 series) cho CÁC KHÁCH HÀNG ĐẦU TIÊN đăng kí NHẬN MÃ từ 07/12 - 10/12. Số lượng giới hạn!<a>Xem chi tiết</a>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="product-right">
                    <div className="p-r-section">
                        <div className="p-r-title"> Chính sách bán hàng </div>
                        <div className="p-r-detail"> <i className="fa fa-check-circle"></i>  Cam kết hàng chính hãng 100%</div>
                        <div className="p-r-detail"> <i className="fa fa-truck-loading"></i>  Miễn phí giao hàng từ 500K</div>
                        <div className="p-r-detail"> <i className="fa fa-exchange-alt"></i>  Đổi trả miễn phí trong 10 ngày</div>
                    </div>
                    <div className="p-r-section">
                        <div className="p-r-title"> Dịch vụ khác</div>
                        <div className="p-r-detail"> <i className="fa fa-tools"></i> Sửa chữa đồng giá 150.000đ.</div>
                        <div className="p-r-detail"> <i className="fa fa-hand-sparkles"></i> Vệ sinh máy tính, laptop.</div>
                        <div className="p-r-detail"> <i className="fa fa-check-square"></i> Bảo hành tại nhà.</div>
                    </div>
                </div>
            </div>
            <div className="product-relate">
                <div class="p-relate-title">Cùng thương hiệu LOGITECH</div>
                <div class="p-relate-list">
                    <CommonCard />
                </div>
                <div className="p-btn-l p-re-btn">
                    <i className="fa fa-caret-left"></i>
                </div>
                <div className="p-btn-r p-re-btn">
                    <i className="fa fa-caret-right"></i>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;