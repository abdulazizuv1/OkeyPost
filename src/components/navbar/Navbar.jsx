import React from 'react'
import "../navbar/Navbar.css"
import {NavLink, Link} from "react-router-dom"


function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <NavLink to={"/"}>
            <img src="./public/imgs/logo.png" alt="" />
          </NavLink>
        </div>
        <ul className="links">
          <li>
            <NavLink to={"/buy"}>Как покупать</NavLink>
          </li>
          <li>
            <NavLink to={"/sale"}>Распродажи</NavLink>
          </li>
          <li>
            <NavLink to={"/price"}>Цены</NavLink>
          </li>
          <li>
            <NavLink to={"/help"}>Помощь</NavLink>
          </li>
          <li>
            <NavLink to={"/bonus"}>Бонусы</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Блог</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>Магазины</NavLink>
          </li>
        </ul>
        <div className="btns">
          <Link to={"/"}>
            <img src="./public/imgs/User.png" alt="" />
            Вход
          </Link>
          <NavLink to={"/"}>
            <button>Связаться с нами</button>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar