import { Routes, Route } from 'react-router-dom'
import { AboutPage, BlogPage, HomePage, MenuPage,ReservationPage } from '../pages/index'

export const AppRouter = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/reservation' element={<ReservationPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
    </Routes>
  )
}