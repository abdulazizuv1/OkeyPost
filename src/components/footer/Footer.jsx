import React from 'react'
import "../footer/Footer.css"
import {NavLink} from "react-router-dom"
import { FaWhatsapp, FaViber  } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_box">
          <div className="logo">
            <NavLink to={"/"}>
              <img src="./public/imgs/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="footer_apps">
           <div className="footer_app">
            <FaWhatsapp />
           </div>
           <div className="footer_app">
            <FaViber/>
           </div>
           <div className="footer_app">
            <TfiCommentAlt />
           </div>
          </div>
        </div>
        <div className="footer_box">
          <ul>
            <li>О компании</li>
            <li><a href="">Услуги</a></li>
            <li><a href="">Цены</a></li>
            <li><a href="">Отзывы</a></li>
            <li><a href="">Контакты</a></li>
            <li><a href="">Вакансии</a></li>
            <li><a href="">Соглашение о персональных данных</a></li>
            <li><a href="">Условия использования</a></li>
          </ul>
        </div>
        <div className="footer_box">
          <ul>
            <li>Полезное</li>
            <li><a href="">Как работает наш сервис</a></li>
            <li><a href="">Как покупать с оператором</a></li>
            <li><a href="">Ответы на частые вопросы</a></li>
            <li><a href="">Популярные магазины</a></li>
            <li><a href="">Черный список магазинов</a></li>
            <li><a href="">Актуальные распродажи</a></li>
         </ul>
        </div>
        <div className="footer_box">
          <ul>
            <li>Спецпроекты</li>
            <li><a href="">50% на первую доставку</a></li>
            <li><a href="">Скидки для постоянных клиентов</a></li>
            <li><a href="">Реферальная программа</a></li>
            <li><a href="">Кэшбек Mr. Rebates и Rakuten</a></li>
            <li><a href="">Stop Fraud</a></li>
          </ul>
        </div>
      </div>
      <div className="container3">
        <p>© 2021 Okeypost . Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer