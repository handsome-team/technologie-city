import React, {useState } from 'react'
import {NavLink} from 'react-router-dom'
import './company.scss'

const companyArray = [
    {url:"/home/1-未点击_u127.png",title:"2018年08月 智博会",content:"2018年8月23日，首届中国国际智能产业博览会在重庆国际博览中心....."},
    {url:"/home/2-未点击_u107.png",title:"2018年06月21日 高交会",content:"2018年06月21日，CEWS-2017在高交会上亮相...."},
    {url:"/home/3-未点击_u114.png",title:"2018年沈阳 颗粒物学会",content:"2018年6月7日，第16届中国国际环保展览会在北京中国国际展览中心开幕....."}
]
const Company = () => {
    const [getShow,setShow] = useState(0)
    const onShow = (index) => {
        setShow(index)
    }
    return (
        <div className="company-box">
            <div className="company-left">
                {
                    companyArray.map((item,index) => {
                        return <div className={getShow===index ?'company-content-hover':'company-content' } onMouseOver={()=> onShow(index)} key={index}>
                            <div className='empty-box'>
                                <img src={item.url} alt=""/>
                                <div className="font-box">
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="company-right">
                {getShow ===0 ?<img src="/home/智博会图片_u124.png" alt=""/> : <></>}
                {getShow ===1 ?<img src="/home/高交会图_u109.png" alt=""/> : <></>}
                {getShow ===2 ?<img src="/home/颗粒物_u117.png" alt=""/> : <></>}
                
            </div>
        </div>
    )
}

export default Company;