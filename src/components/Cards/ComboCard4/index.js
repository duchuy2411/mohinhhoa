import React, { useState } from 'react';
import "./style.css"

function ComboCard4() {
    return (
        <div className="combo-card-4">
            <div className="c4-left">
                <img src="https://phongvu.vn/media/wysiwyg/Hoang/CateBL/122020/cate3.jpg"></img>
            </div>
            <div className="c4-right">
                <div className="c4-r-cell">
                    <div><strong>Smart Tivi</strong></div>
                    <div>Tiết kiệm đến 7.3 triệu</div>
                    <img className="img-cell" src="https://lh3.googleusercontent.com/wc9fD4xIVV-b9Tez_cZoY0Ifagf0skZKlhr84y2juAS5Q_EdLiIwO92H14BP3p8ZcUKBoHtL7WZugpSX_fxA=w500-rw-rw" />
                </div>
                <div className="c4-r-cell">
                    <div><strong>Tủ lạnh</strong></div>
                    <div>Tiết kiệm đến 2.3 triệu</div>
                    <img className="img-cell" src="https://lh3.googleusercontent.com/2kFsZsysuQm1vsWedrdBzu2UjZrjrvAVXDZif7lB2Yc6cAyhZnWIlDbfXqFhMSLuwv68qKplZY4egbZ3kWw=w500-rw"/>
                </div>
                <div className="c4-r-cell">
                    <div><strong>Smart Tivi</strong></div>
                    <div>Cho không gian xanh sạch</div>
                    <img className="img-cell" src="https://lh3.googleusercontent.com/ApMHrZGuAPA8BKKp_sR7Ww0WD50OrJ76iv58EP-ps5knrNqpKAMimPZ61-rZ02tbKeLJiChWSZfPJ09SEZXA=rw" />
                </div>
                <div className="c4-r-cell">
                    <div><strong>Smart Tivi</strong></div>
                    <div>Giá chỉ từ 5 triệu</div>
                    <img className="img-cell" src="https://img.vnshop.vn/height/350/media/catalog/product/m/_/m_y_h_t_b_i_vacuum_xiaomi_mi_robot_1.jpg" />
                </div>
            </div>
        </div>
    )
}

export default ComboCard4;