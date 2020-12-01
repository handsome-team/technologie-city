import "./company.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { getCompanyData } from "../../api/index";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function Company() {
  const [dataList, changeDataList] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let {
        data: { data },
      } = await getCompanyData();
      changeDataList(data);
    };
    getdata();
  }, []);
  console.log(dataList);

  return (
    <div className="companyBox">
      <div className="companyBanner">
        <img src="/company/banner__u1415.jpg" alt="" />
      </div>
      <div className="companyCenter">
        <p>首页-公司动态</p>
        <Swiper
          className="swiper"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {
            // 判断请求结果是否为空,如果为空就渲染空标签,如果有数据就渲染dom结构
            dataList.length == 0 ? (
              <></>
            ) : (
              dataList.map((item, index) => {
                return (
                  <SwiperSlide className="slideOne" key={index}>
                    {/* 左边文字 */}
                    <div className="slideLeft">
                      <h1>{item.title}</h1>
                      <span className="slideShenyang">{item.text}</span>
                      <p className="slideSpan">{item.content}</p>
                      <img
                        src="/company/微信图片_20201129204403.png"
                        className="slideImg"
                      />
                      <NavLink to={`/company/${item.id}`}>
                        {" "}
                        <div className="slideMore">
                          <span>MORE</span>
                        </div>
                      </NavLink>
                    </div>
                    {/* 右边照片 */}
                    <div className="slideRight">
                      <div className="slideGray">
                        <div>
                          <img src={item.img} className="Img" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            )
          }
        </Swiper>
      </div>
                                       
    </div>
  );
}
