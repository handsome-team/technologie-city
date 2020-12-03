import { Carousel } from "antd";
import { useState, useRef, useEffect } from "react";
import { getuserProject } from "../../api/index";
import Footer from '../footer/Footer'
import Map from '../map/Map'
import './user.scss'
function onChange(a, b, c) {
  console.log(a, b, c);
}
export default function User() {
  const [isShow, setShows] = useState(0);
  const [isShow1, setShows1] = useState(0);
  const [dataList, getDataList] = useState([]);
  // 请求接口
  useEffect(() => {
    const getdata = async () => {
      let {
        data, code
      } = await getuserProject();
      if (code === 200) {
        let newArray = [];
        for (var i = 0; i < data.length; i += 3) {
          newArray.push(data.slice(i, i + 3));
        };
        console.log(await getuserProject())
        getDataList(newArray);
      }
    };
    getdata();
  }, []);
  // 箭头变色方法
  const setShow = index => {
    setShows(index);
  };
  const setShow1 = index => {
    setShows1(index);
  };
  const carousel = useRef();
  // 轮播图按钮点击
  const handlePrev = () => {
    carousel.current.next();
  };
  return (
    <div className='usercontainer'>
      <div className="user-banner">
        <img src="/user/banner___u1183.png" alt="关于我们banner" />
        <div className='fontbox'>
          <h1>优于传统检测设备</h1>
          <span>更加灵活</span>
          <span className='spans'>体积小巧</span>
          <p>Better than traditional monitoring equipment More flexible and compact</p>
        </div>
      </div>
      <div className="titlebox">
        <span className='shouye'>首页>></span>
        <span>用户案例</span>
      </div>
      {/* 轮播 */}
      <div className="swiperbox">
        <div className="swiper-imgbox">
          <Carousel afterChange={onChange} ref={carousel}>
            {dataList.length === 0 ? <></> :
              dataList.map((item, index) => {
                return (
                  <div className="firstbox" key={index}>
                    {
                      item.map((item1, index) => {
                        return (
                          <div className="one" key={index}>
                            <img src={item1.imgurl} alt="" />
                            <div className="hiddenfont">
                              <h2>{item1.title}</h2>
                              <p>购买时间：{item1.time} </p>
                              <p>客户名称：{item1.title}</p>
                              <p> 提供设备信息{item1.msg} </p>
                              <p>用途：{item1.purpose} </p>
                              <p>使用评价：{item1.evaluate}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
          {/* 左 */}
          <div
            className="leftarrow"
            onClick={handlePrev}
            onMouseOver={() => {
              setShow(1);
            }}
            onMouseLeave={() => {
              setShow(0);
            }}
          >
            {isShow === 0 ? (
              <img src="/user/左箭头_u1187.png" alt="" />
            ) : (
                <img src="/user/点击左箭头_u1190.png" alt="" />
              )}
          </div>
          {/* 右边 */}
          <div
            className="rightarrow"
            onClick={handlePrev}
            onMouseOver={() => {
              setShow1(1);
            }}
            onMouseLeave={() => {
              setShow1(0);
            }}
          >
            {isShow1 === 0 ? (
              <img src="/user/右箭头_u1188.png" alt="" />
            ) : (
                <img src="/user/点击右箭头_u1189.png" alt="" />
              )}
          </div>
        </div>
      </div>
      {/* 地图 */}
      <Map />
      {/* 底部 */}
      <Footer />
    </div>
  );
}
