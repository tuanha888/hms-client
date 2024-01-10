import React from "react";
import Service01 from "../../../assets/images/services_01.jpg";
const Services = () => {
  return (
    <div id="sevices">
      <div className="container">
        <h2 className="services-heading">Dịch vụ</h2>
        <ul className="services-list">
          <li className="services-item">
            <div className="services-img">
              <img src={Service01} alt="" />
              <p className="services-content">
                mang lại giải pháp thăm khám toàn diện và sàng lọc một số bệnh
                lý ung thư như dạ dày, đại tràng ... với các bác sĩ, chuyên gia
                cao cấp tại Vinmec, từ đó có hướng xây dựng kế hoạch chăm sóc
                sức khoẻ
              </p>
            </div>
          </li>
          <li className="services-item"></li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
