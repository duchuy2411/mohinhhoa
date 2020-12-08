import React, { useState, useEffect } from "react"
import ComboCard4 from "../Cards/ComboCard4"
import CommmonCard from "../Cards/CommonCard"
import Category from "../common/Category"

function BodyPage() {
    return (
        <div className="body" >

            <img src="https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat-3_800x450.jpg" />

            <Category />

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

            <div className="section-body-com-card">
                <div className="section-title">
                    Sản phẩm khác ...
                    </div>
                <CommmonCard />
            </div>
        </div>
    )
}

export default BodyPage;