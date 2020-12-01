import './qualifications.scss';
import Footer from '../footer/Footer'
import Map from '../map/Map'
import Wing from '../wing/Wing'
import { useState } from 'react'

export default function Qualifications() {
    const [isShow, onShow] = useState(0)
    const mouseOver = (index) => {
        // console.log(index)
        onShow(index)
    };

    return (
        <div className="qualificationsBox">
            <Wing />
            <div className="qualifications-banner">
                <img src="/qualifications/微信图片_20201127140820.png" alt="" />
            </div>
            <div className="contentBox">
                <div className="content">
                    <p className="oneTitle">
                        <span className='bbb'>首页 {'>>'}</span>
                        <span className="aaa">产品中心</span>
                    </p>
                    <div className="pict">
                        <div className="select">
                            <p className={isShow === 0 ? 'hover' : 'ishover'} onMouseOver={() => { mouseOver(0) }}>营业执照</p>
                            <p className={isShow === 1 ? 'hover' : 'ishover'} onMouseOver={() => { mouseOver(1) }}>发明专利</p>
                            <p className={isShow === 2 ? 'hover' : 'ishover'} onMouseOver={() => { mouseOver(2) }}>中科院证明</p>
                            <p className={isShow === 3 ? 'hover' : 'ishover'} onMouseOver={() => { mouseOver(3) }}>环境科学年会优秀参展商</p>
                            <p className={isShow === 4 ? 'hover' : 'ishover'} onMouseOver={() => { mouseOver(4) }}>ISO9001质量管理体系认证</p>
                        </div>
                        <div className="imgBox">
                            {
                                isShow === 0 ? <img src="/qualifications/zizhizhengming_yingyezhizhao@2x.png" alt="" /> : <></>
                            }
                            {
                                isShow === 0 ? <p className='hover'></p> : <p className='ishover'></p>
                            }
                            {
                                isShow === 1 ? <img src="/qualifications/zizhizhengming_famingzhuanli@2x.png" alt="" /> : <></>
                            }
                            {
                                isShow === 1 ? <p className='hover'></p> : <p className='ishover'></p>
                            }
                            {
                                isShow === 2 ? <img src="/qualifications/zizhizhengming_zhongkeyuanzhengming@2x.png" alt="" /> : <></>
                            }
                            {
                                isShow === 2 ? <p className='hover'></p> : <p className='ishover'></p>
                            }
                            {
                                isShow === 3 ? <img src="/qualifications/zizhizhengming_huanjingkexuenianhui@2x.png" alt="" /> : <></>
                            }
                            {
                                isShow === 3 ? <p className='hover'></p> : <p className='ishover'></p>
                            }
                            {
                                isShow === 4 ? <img src="/qualifications/zizhizhengming_iso9001@2x.png" alt="" /> : <></>
                            }
                            {
                                isShow === 4 ? <p className='hover'></p> : <p className='ishover'></p>
                            }

                        </div>
                    </div>
                </div>
                <Map />
            </div>
            <div className="q-footer">
                <Footer />
            </div>
        </div>
    )
}

