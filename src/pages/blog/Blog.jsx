import React, { useState } from 'react'
import "../blog/Blog.css"
import { FaWhatsapp, FaViber  } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";


function Blog() {
  const [data, setData]=useState([
    {
      img: "./public/imgs/blog1.png",
      title: `Интернет-магазин Urban Outfitters в UK: обзор`
    },
    {
      img: "./public/imgs/blog2.png",
      title: "Overstock. Брендовые товары  по доступным ценам"
    },
    {
      img: "./public/imgs/blog3.png",
      title: "Skechers с Amazon. Удобная обувь для всей семьи"
    },
    {
      img: "./public/imgs/blog4.png",
      title: "16 лучших подарков с Амазона в 2021 году"
    },
    {
      img: "./public/imgs/blog5.png",
      title: "Target — семейный супермаркет с ценами от 300 рублей!"
    },
    {
      img: "./public/imgs/blog6.png",
      title: "Английский магазин RIPNDIP. Покупаем самовыражение"
    },
    {
      img: "./public/imgs/blog7.png",
      title: "Nautica. Элитные товары из Англии по низким ценам"
    },
    {
      img: "./public/imgs/blog8.png",
      title: "Forever 21 - покупаем джинсы за 1 500 рублей"
    },
    {
      img: "./public/imgs/blog9.png",
      title: "Как купить кроссовки Balenciaga на 30 000 рублей дешевле?"
    },
    {
      img: "./public/imgs/blog10.png",
      title: "Топ-7 самых дорогих сумок Louis Vuitton"
    },
    {
      img: "./public/imgs/blog11.png",
      title: "BH Cosmetics Galaxy. Галактика красоты и ухода "
    },
    {
      img: "./public/imgs/blog12.png",
      title: '“Вансы”. Крутые кеды, которые не выйдут из моды никогда!'
    },
  ])
  return (
    <>
    <section className='price'>
        <div className="container2">
          <div className="container">
            <p>Главная  /  Блог</p>
            <h1>Блог</h1>
          </div>
        </div>
    </section>
    <section>
      <div className="container">
        <div className="blog_boxes">
          {
            data.map((item)=>{
              return(
                <div className="blog_box">
                  <img src={item.img} alt="" />
                  <div className="blog_box_bt">
                    <h3>{item.title}</h3>
                    <div className="blog_info">
                      <p>22.10.2021</p>
                      <p className='blog_text'><img src="./public/imgs/clock.png" alt="" />Читать: 8 минут</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className="sale_slide sale_slide1">
             <div className="slide_right">
              <div className="slide_box slide_box1 slide_box_arrow">
                <FaArrowLeft />
              </div>
              <div className="slide_box slide_box1">
                <p>1</p>
              </div>
              <div className="slide_box slide_box1">
                <p>2</p>
              </div>
            </div>
            <div className="sale_slide_center">...</div>
            <div className="slide_right">
              <div className="slide_box slide_box1">
                <p>23</p>
              </div>
              <div className="slide_box slide_box1">
                <p>24</p>
              </div>
              <div className="slide_box slide_box1 slide_box_arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='questions'>
  <div className="container2">
    <div className="container">
      <div className="quest_left">
        <h1>Остались вопросы? Спросите нас в соцсетях!</h1>
      </div>
      <div className="quest_right">
        <div className="quest_box">
          <FaWhatsapp />
        </div>
        <div className="quest_box">
          <FaViber/>
        </div>
        <div className="quest_box">
          <TfiCommentAlt />
        </div>
      </div>
    </div>
  </div>
    </section>
    </>
  )
}

export default Blog