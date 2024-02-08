import React from 'react'
import "../bonus/Bonus.css"

function Bonus() {
  return (
    <>
    <section className='how_to_buy'>
        <div className="container2">
          <div className="container">
            <p>Главная  /  Бонусы и партнёрская программа</p>
            <h1>Бонусы и партнёрская программа</h1>
            <h2>Платим $3 с каждой отправленной посылки</h2>
            <button>Начать зарабатывать</button>
          </div>
        </div>
    </section>
    <section>
      <div className="container">
        <h1 className='h1_text h1_text2'>Зарабатывать с нами — проще простого:</h1>
        <div className="clients_boxes clients_boxes2">
            <div className="client_box client_box2">
              <img src="./public/imgs/bonus5.png" alt="" />
              <h3>Дарим скидку 10% вашим друзьям и подписчикам</h3>
              <p>На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.</p>
            </div>
            <div className="client_box client_box2">
              <img src="./public/imgs/bonus1.png" alt="" />
              <h3>Платим по £3 за отправленную посылку </h3>
              <p>Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет.</p>
            </div>
            <div className="client_box client_box2">
              <img src="./public/imgs/bonus3.png" alt="" />
              <h3>Промо на любой вкус</h3>
              <p>Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.</p>
            </div>
            <div className="client_box client_box2">
              <img src="./public/imgs/bonus2.png" alt="" />
              <h3>Выплаты по запросу</h3>
              <p>Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет.</p>
            </div>
            <div className="client_box client_box2">
              <img src="./public/imgs/bonus4.png" alt="" />
              <h3>Начисляем кэшбэк £1 на 1 посылку</h3>
              <p>За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов </p>
            </div>
          </div>
      </div>
    </section>
    <section className='virt'>
        <div className="container2">
          <div className="container">
            <div className="virt_left">
              <img src="./public/imgs/bonus_cont1.png" alt="" />
            </div>
            <div className="virt_right">
              <h1>Готовы начать зарабатывать вместе с нами?</h1>
              <p>
              Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!
              </p>
              <button>Присоедениться</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bonus