import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './header/Header'
export default function App() {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}