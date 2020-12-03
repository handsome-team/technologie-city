import './map.scss'
import { useState, useEffect } from 'react'
import { getConnetData } from '../../api/index'
export default function Map() {
    const [getconnect, setconnect] = useState([])
    // 获取联系电话数据
    useEffect(() => {
        const getconnectdata = async () => {
            let { data } = await getConnetData()
            setconnect(data)
        }
        getconnectdata()
    }, [])
    return (
        <div className="map">
            <div className="mapBanner">
                <img src="/qualifications/001.png" alt="" />
            </div>
            <div className="mapBox">
                <div className="connect">
                    {
                        getconnect.length === 0 ? <></> : (
                            getconnect.map((item, index) => {
                                console.log(item)
                                return (
                                    <div key={index}>
                                        <p className="connent-title">联系方式</p>
                                        <div className="connect-number">
                                            <p>联系方式:</p>
                                            <p>{item.contact}</p>
                                        </div>
                                        <div className="connect-number">
                                            <p>客服QQ:</p>
                                            <p>{item.qq}</p>
                                        </div>
                                        <div className="connect-number">
                                            <p>邮箱:</p>
                                            <p>{item.email}</p>
                                        </div>
                                        <div className="connect-number">
                                            <p>地址:</p>
                                            <p>{item.address}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
                <div className="mapimg">
                    <img src="/qualifications/002.png" alt="" />
                </div>
            </div>
        </div>
    )
}
