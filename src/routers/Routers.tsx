import React from 'react'
import App from '../App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AllCatsPages } from '../Pages/AllCatsPages'
import { FavoriteСats } from '../Pages/FavoriteСats'

export const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<AllCatsPages/>}/>
                <Route path='favorite' element={<FavoriteСats/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
