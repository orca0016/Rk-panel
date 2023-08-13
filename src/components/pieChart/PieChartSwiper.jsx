import React from "react";
import PieCharts from "./PieChart";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function PieChartSwiper() {
  return (
    <div className="h-pieChart">
      <Swiper navigation={true} loop={true}  modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <PieCharts />
        </SwiperSlide>
        <SwiperSlide>
          <PieCharts />
        </SwiperSlide>
        <SwiperSlide>
          <PieCharts />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PieChartSwiper;
