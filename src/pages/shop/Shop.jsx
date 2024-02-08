import React, { useState } from 'react'
import "./Shop.css"
import { FaWhatsapp, FaViber  } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";


function Shop() {
  const [data, setData]=useState([
    {
      img: "./public/imgs/pop1.png",
      title: `Primark (Форма заказа)`
    },
    {
      img: "./public/imgs/pop2.png",
      title: "H&M"
    },
    {
      img: "./public/imgs/pop3.png",
      title: "Mangooutlet"
    },
    {
      img: "./public/imgs/pop4.png",
      title: "Next"
    },
    {
      img: "./public/imgs/pop5.png",
      title: "Sportdirect"
    },
    {
      img: "./public/imgs/pop6.png",
      title: "Clothing at Tesco"
    },
    {
      img: "./public/imgs/pop7.png",
      title: "George at ASDA"
    },
    {
      img: "./public/imgs/pop8.png",
      title: "Accessorize"
    },
    {
      img: "./public/imgs/pop9.png",
      title: "Adidas UK"
    },
    {
      img: "./public/imgs/pop10.png",
      title: "Amazon"
    },
    {
      img: "./public/imgs/pop11.png",
      title: "ASOS"
    },
    {
      img: "./public/imgs/pop12.png",
      title: 'Boohoo'
    },

    {
      img: "./public/imgs/pop13.png",
      title: `Crocs`
    },
    {
      img: "./public/imgs/pop14.png",
      title: "Ebay"
    },
    {
      img: "./public/imgs/pop15.png",
      title: "Matalan"
    },
    {
      img: "./public/imgs/pop16.png",
      title: "Mothercare"
    },
    {
      img: "./public/imgs/pop17.png",
      title: "New Look"
    },
    {
      img: "./public/imgs/pop18.png",
      title: "Puma"
    },
    {
      img: "./public/imgs/pop19.png",
      title: "Timberland"
    },
    {
      img: "./public/imgs/pop20.png",
      title: "Showroomprive"
    },
    {
      img: "./public/imgs/pop21.png",
      title: "Brand Alley"
    },
    {
      img: "./public/imgs/pop22.png",
      title: "M&S"
    },
    {
      img: "./public/imgs/pop23.png",
      title: "Clarks"
    },
    {
      img: "./public/imgs/pop24.png",
      title: 'Zara'
    },
    {
      img: "./public/imgs/pop25.png",
      title: "Mango"
    },
    {
      img: "./public/imgs/pop26.png",
      title: "Zulily"
    },
    {
      img: "./public/imgs/pop27.png",
      title: "Panachekids"
    },
    {
      img: "./public/imgs/pop28.png",
      title: "Betterware"
    },
    {
      img: "./public/imgs/pop29.png",
      title: "Tucci Store"
    },
    {
      img: "./public/imgs/pop30.png",
      title: 'Mini Mode'
    },
  ])
  return (
    <>
    <section className='price'>
        <div className="container2">
          <div className="container">
            <p>Главная  /  Популярные магазины</p>
            <h1>Популярные магазины</h1>
          </div>
        </div>
    </section>
    <section>
      <div className="container">
        <div className="popular_boxes">
          {
            data.map((item)=>{
              return(
                <div className="popular_box">
                  <img src={item.img} alt="" />
                  <h4>{item.title}</h4>
                </div>
              )
            })
          }
          <div className="sale_slide sale_slide2">
             <div className="slide_right">
              <div className="slide_box slide_box_arrow">
                <FaArrowLeft />
              </div>
              <div className="slide_box">
                <p>1</p>
              </div>
              <div className="slide_box">
                <p>2</p>
              </div>
            </div>
            <div className="sale_slide_center">...</div>
            <div className="slide_right">
              <div className="slide_box">
                <p>23</p>
              </div>
              <div className="slide_box">
                <p>24</p>
              </div>
              <div className="slide_box slide_box_arrow">
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

export default Shop