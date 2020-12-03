import React, { useState, useEffect } from 'react'
import './company.scss'
import { getCompanyData } from '../../api/index'
const Company = () => {
    const [getShow, setShow] = useState(0)
    const [datalist, setDataList] = useState([])
    const [imgurl] = useState(['/home/1-未点击_u127.png', '/home/2-未点击_u107.png', '/home/3-未点击_u114.png'])
    const [itemhover, setItemHover] = useState([true, false, false])

    useEffect(() => {
        const getcompany = async () => {
            const { data } = await getCompanyData();
            var newArray = []
            for (let i = 0; i < 3; i++) {
                newArray.push(data[i])
            }
            setDataList(newArray)
        }
        getcompany()
    }, [])
    const mouseHover = (index) => {
        setShow(index)
        const hover = [...itemhover]
        for (let i = 0; i < hover.length; i++) {
            hover[i] = false
        }
        hover[index] = true
        setItemHover(hover)
    }
    // console.log(datalist)
    return (
        <div className="company-box">
            <div className="company-left">
                {
                    datalist.length == 0 ? (<></>) :
                        (datalist.map((item, index) => {
                            // console.log(item)
                            return (
                                <div onMouseOver={() => { mouseHover(index) }} className={itemhover[index] ? 'company-content-hover' : 'company-content'} key={index}>
                                    <div className='empty-box'>
                                        <img src={imgurl[index]} alt="" />
                                        <h1>{item.text}&nbsp;&nbsp;&nbsp;{item.title}</h1>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })
                        )
                }
            </div>
            <div className="company-right">
                {getShow === 2 ? <img src="/home/智博会图片_u124.png" alt="" /> : <></>}
                {getShow === 1 ? <img src="/home/高交会图_u109.png" alt="" /> : <></>}
                {getShow === 0 ? <img src="/home/颗粒物_u117.png" alt="" /> : <></>}
            </div>
        </div>
    )
}

export default Company;