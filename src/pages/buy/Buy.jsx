import React from 'react'
import "../buy/Buy.css"
import { FaWhatsapp, FaViber  } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";

function Buy() {
  return (
    <main>
      <section className='how_to_buy'>
        <div className="container2">
          <div className="container">
            <p>Главная  /  Как покупать</p>
            <h1>Научим покупать Великобритании!</h1>
            <h2>и экономить до 70%</h2>
            <button>Получить адрес в UK</button>
          </div>
        </div>
      </section>
      <section className='buy_uk'>
        <div className="container">
          <h1>Покупать в Великобритании очень просто</h1>
          <p>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</p>
          <div className="buy_block">
            <div className="buy_card">
              <div className="buy_card_left">
                <img src="./public/imgs/buy_box1.png" alt="" />
              </div>
              <div className="buy_card_right">
                <div className="buy_card_title">
                  <h1>01</h1>
                  <h2>Получаем адрес для покупок в магазинах Великобритании </h2>
                </div>
                <p>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
              </div>
            </div>
            <div className="buy_card">
              <div className="buy_card_left">
                <img src="./public/imgs/buy_box2.png" alt="" />
              </div>
              <div className="buy_card_right">
                <div className="buy_card_title">
                  <h1>02</h1>
                  <h2>Идём за покупками в онлайн-магазины </h2>
                </div>
                <p>Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, <span>что покупать нельзя.</span></p>
              </div>
            </div>
            <div className="buy_card">
              <div className="buy_card_left">
                <img src="./public/imgs/buy_box3.png" alt="" />
              </div>
              <div className="buy_card_right">
                <div className="buy_card_title">
                  <h1>03</h1>
                  <h2>Следим за перемещением посылки до склада </h2>
                </div>
                <p>После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.</p>
              </div>
            </div>
            <div className="buy_card">
              <div className="buy_card_left">
                <img src="./public/imgs/buy_box4.png" alt="" />
              </div>
              <div className="buy_card_right">
                <div className="buy_card_title">
                  <h1>04</h1>
                  <h2>Оплачиваем доставку и покупки отправляются домой </h2>
                </div>
                <p>Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно. <br /> <br />
                Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер.
                </p>
              </div>
            </div>
            <div className="buy_card">
              <div className="buy_card_left">
                <img src="./public/imgs/buy_box5.png" alt="" />
              </div>
              <div className="buy_card_right">
                <div className="buy_card_title">
                  <h1>05</h1>
                  <h2>Получаем посылку и спешим сделать новый заказ </h2>
                </div>
                <p>Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)</p>
              </div>
            </div>
            <button>Получить адрес в UK</button>
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
    </main>
  )
}

export default Buy