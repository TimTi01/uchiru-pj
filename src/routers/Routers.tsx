import React from 'react'
import App from '../App'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { AllCatsPages } from '../Pages/AllCatsPages'
import { FavoriteСats } from '../Pages/FavoriteСats'

export const Routers = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<AllCatsPages/>}/>
                <Route path='favorite' element={<FavoriteСats/>}/>
            </Route>
        </Routes>
    </HashRouter>
  )
}
