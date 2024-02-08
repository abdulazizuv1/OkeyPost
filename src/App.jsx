import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Buy from './pages/buy/Buy'
import Sale from './pages/sale/Sale'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Price from './pages/price/Price'
import Help from './pages/help/Help'
import Bonus from './pages/bonus/Bonus'
import Blog from './pages/blog/Blog'
import Shop from './pages/shop/Shop'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/sale' element={<Sale/>}/>
          <Route path='/price' element={<Price/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/bonus' element={<Bonus/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
