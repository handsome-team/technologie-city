import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
export default function App(){
    return (
        <BrowserRouter>
            <Header/>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}