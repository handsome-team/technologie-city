import { useParams, useLocation } from "react-router-dom";
import { getCompanyDetail } from "../../api/index";
import "./details.scss";
import { useEffect, useState } from "react";

export default function Details() {
  const route = useLocation();
  const [dataList, changeDataList] = useState([]);
  var { id } = useParams();

  useEffect(() => {
    const getdata = async (id) => {
      let {
        data: { data },
      } = await getCompanyDetail(id);
      changeDataList(data);
    };
    getdata(id);
  }, []);
  console.log(dataList);

  console.log(route);
  return (
    <div className="bigDiv">
      {dataList[0] && (
        <>
          <div className="page">
            <span>首页-公司动态-{dataList[0].title}</span>
          </div>
          <div className="pageCenter">
            {/* 背景盒子 */}
            <div className="divOne">
              {/*  左边部分*/}
              <div className="divLeft">
                <div className="divLeft-one">
                  <p>
                    <span className="keli">{dataList[0].title}</span>
                    <span className="shenyang">{dataList[0].text}</span>
                  </p>
                  <div className="text">{dataList[0].main}</div>
                </div>
              </div>
              {/* 右边部分 */}
              <div className="divRight">
                <img src={dataList[0].img} alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
