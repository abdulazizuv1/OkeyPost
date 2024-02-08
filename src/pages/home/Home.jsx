import React from 'react'
import "../home/Home.css"


function Home() {
  return (
    <main>
      <section className='header_sect'>
        <div className="container2">
          <div className="container">
            <div className="main_left">
              <h1>Доставка товаров из Великобритании в Россию</h1>
              <p>
              Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
              </p>
              <button>Получить адрес в UK</button>
            </div>
            <div className="main_right">
              <img src="./public/imgs/home_img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='text'>Насколько выгодно покупать?</h1>
          <div className="line">
            <div className="line_box">
              <img src="./public/imgs/arrow_left.png" alt="" />
            </div>
            <div className="line_box">
              <img src="./public/imgs/box1.png" alt="" />
              <p>Одежда</p>
            </div>
            <div className="line_box">
              <img src="./public/imgs/box2.png" alt="" />
              <p>Электроника</p>
            </div>
            <div className="line_box">
              <img src="./public/imgs/box3.png" alt="" />
              <p>Аксессуары</p>
            </div>
            <div className="line_box">
              <img src="./public/imgs/box4.png" alt="" />
              <p>Для детей</p>
            </div>
            <div className="line_box">
              <img src="./public/imgs/box5.png" alt="" />
              <p>Для спорта</p>
            </div>
            <div className="line_box">
              <img src="./public/imgs/box6.png" alt="" />
              <p>Косметика</p>
            </div>
            <div className="line_box">
              <img src="./public/imgs/arrow_right.png" alt="" />
            </div>
          </div>
          <div className="clothes">
            <div className="cloth_left">
              <h2>Columbia Barlow Pass 550 Turbodown Jacket</h2>
              <div className="cloth_box">
                <div className="cloth_box_left">
                  <img src="./public/imgs/ru.png" alt="" />
                </div>
                <div className="cloth_box_right">
                  <p>Цена в России</p>
                  <h3>7891,46₽</h3>
                </div>
              </div>
            </div>
            <div className="cloth_center">
              <img src="./public/imgs/coat.png" alt="" />
            </div>
            <div className="cloth_right">
            <h2>Доставка одежды из Великобритании от <span className='cloth_text'>£7.79</span></h2>
              <div className="cloth_box">
                <div className="cloth_box_left">
                  <img src="./public/imgs/uk.png" alt="" />
                </div>
                <div className="cloth_box_right">
                  <p>Цена в UK</p>
                  <h3 className='cloth_text'>£80.62</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="delivery">
            <div className="delivery_left">
              <div className="del_left1">
                <img src="./public/imgs/tshirt1.png" alt="" />
              </div>
              <img src="./public/imgs/arrow_left.png" alt="" />
            </div>
            <div className="delivery_center">
              <p>Срок доставки примерно 10 дней</p>
              <h2>Вы экономите до <span className='cloth_text'>$119.56</span></h2>
            </div>
            <div className="delivery_right">
            <img src="./public/imgs/arrow_right.png" alt="" />
            <div className="del_left1">
                <img src="./public/imgs/tshirt2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="del_bottom">
            <div className="del_box">
              <img src="./public/imgs/del1.png" alt="" />
              <p>Экономия до 70%</p>
            </div>
            <div className="del_box">
              <img src="./public/imgs/del2.png" alt="" />
              <p>Только подлинная продукция</p>
            </div>
            <div className="del_box">
              <img src="./public/imgs/del3.png" alt="" />
              <p>Оперативная доставка</p>
            </div>
            <div className="del_box">
              <img src="./public/imgs/del4.png" alt="" />
              <p>Огромный выбор товаров</p>
            </div>
          </div>
        </div>
      </section>
      <section className='try'>
        <div className="container2">
          <div className="container">
            <div className="try_left">
              <img src="./public/imgs/try1.png" alt="" />
            </div>
            <div className="try_right">
              <h1>Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.</h1>
              <p>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</p>
              <button>Попробовать</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container location">
          <h1>OkeyPost удобная и быстрая доставка посылок из Великобритании</h1>
          <p>Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными.</p>
          <form action="">
            <div className="location_boxes">
            <div className="location_box">
              <p>Страна:</p>
              <select className='select1' name="" id="">
                <option value="">Россия</option>
                <option value="">Узбекистан</option>
                <option value="">Казахстан</option>
              </select>
            </div>
            <div className="location_box">
              <p>Город:</p>
              <input className='input1' type="text" placeholder='Москва'/>
            </div>
            <div className="location_box"> 
              <p>Индекс:</p>           
              <input className='input2' type="text" placeholder='Введите индекс'/>
            </div>
            <div className="location_box"> 
              <p>Вес посылки:</p>           
              <input className='input3' type="text" placeholder='0,5'/>
            </div>
            <div className="location_box">
              <p>Дополнительные услуги:</p>
              <select className='select2' name="" id="">
                <option value="">Выберите услуги</option>
                <option value="">Доставка</option>
                <option value="">Отправить</option>
              </select>
            </div>
            </div>
            <button>Рассчитать</button>         
          </form>
        </div>
      </section>
      <section>
        <div className="container varients">
          <h1>Варианты доставки:</h1>
          <div className="var_box">
            <div className="var_box1 var_box_cont">
              <img src="./public/imgs/var1.png" alt="" />
              <h3>Почта России</h3>
            </div>
            <div className="var_box2 var_box_cont">
              <p>Сроки:</p>
              <h3>10-14 дней</h3>
            </div>
            <div className="var_box3 var_box_cont">
              <p>Стоимость доставки:</p>
              <h3>от £27.00 <img src="./public/imgs/info.png" alt="" /></h3>
            </div>
            <div className="var_box4 var_box_cont">
              <p>Итого:</p>
              <h3>£41.99</h3>
            </div>
            <div className="var_box5 var_box_cont">
              <img src="./public/imgs/arrow_down.png" alt="" />
            </div>
          </div>
          <div className="var_box">
            <div className="var_box1 var_box_cont">
              <img src="./public/imgs/var2.png" alt="" />
              <h3>EMS ПОЧТА РОССИЯ</h3>
            </div>
            <div className="var_box2 var_box_cont">
              <p>Сроки:</p>
              <h3>9-12 дней</h3>
            </div>
            <div className="var_box3 var_box_cont">
              <p>Стоимость доставки:</p>
              <h3>от £40.00 <img src="./public/imgs/info.png" alt="" /></h3>
            </div>
            <div className="var_box4 var_box_cont">
              <p>Итого:</p>
              <h3>£54.55</h3>
            </div>
            <div className="var_box5 var_box_cont">
              <img src="./public/imgs/arrow_down.png" alt="" />
            </div>
          </div>
          <div className="var_box">
            <div className="var_box1 var_box_cont">
              <img src="./public/imgs/var3.png" alt="" />
              <h3>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</h3>
            </div>
            <div className="var_box2 var_box_cont">
              <p>Сроки:</p>
              <h3>10-14 дней</h3>
            </div>
            <div className="var_box3 var_box_cont">
              <p>Стоимость доставки:</p>
              <h3>от £13.00 <img src="./public/imgs/info.png" alt="" /></h3>
            </div>
            <div className="var_box4 var_box_cont">
              <p>Итого:</p>
              <h3>£90.50</h3>
            </div>
            <div className="var_box5 var_box_cont">
              <img src="./public/imgs/arrow_down.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container buy">
          <h1>4 простых шага для ваших покупок в Великобритании </h1>
          <div className="buy_boxes">
            <div className="buy_box">
              <img src="./public/imgs/buy1.png" alt="" />
              <h3 >вы ВЫБИРАЕТЕ <br /> ТОВАР</h3>
              <p>
                в английском магазине, оплачиваете и указываете <span>адрес склада</span> OkeyPost
              </p>
            </div>
            <div className="buy_box">
              <img src="./public/imgs/buy2.png" alt="" />
              <h3 >ПОКУПКИ ПРИХОДЯТ НА СКЛАД</h3>
              <p>
               и появляются в вашем личном кабинете на нашем сайте
              </p>
            </div>
            <div className="buy_box">
              <img src="./public/imgs/buy3.png" alt="" />
              <h3>ОТПРАВЛЯЕМ ИХ <br /> К ВАМ ДОМОЙ</h3>
              <p>
               в надежной упаковке, по выгодной цене и очень быстро
              </p>
            </div>
            <div className="buy_box">
              <img src="./public/imgs/buy4.png" alt="" />
              <h3>ЗАБИРАЕТЕ <br /> свою ПОСЫЛКУ</h3>
              <p>
               в пункте выдачи, на почте или с курьером
              </p>
            </div>
          </div>
          <p className="buy_text">
            Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.
          </p>
          <button>Быстрая покупка</button>
        </div>
      </section>
      <section className='virt'>
        <div className="container2">
          <div className="container">
            <div className="virt_left">
              <img src="./public/imgs/virt1.png" alt="" />
            </div>
            <div className="virt_right">
              <h1>Виртуальный тур по нашему складу в реальном времени</h1>
              <p>
                Вы можете всегда посмотреть на нашу слаженую работу на складе
              </p>
              <button>Попробовать</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container clients">
          <h1>120 000 довольных клиентов в России уже сделали свой выбор</h1>
          <p className='clients_text'>За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва</p>
          <div className="clients_boxes">
            <div className="client_box">
              <img src="./public/imgs/clients1.png" alt="" />
              <h3>Больше не значит дороже</h3>
              <p>С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.</p>
            </div>
            <div className="client_box">
              <img src="./public/imgs/clients2.png" alt="" />
              <h3>Быстрая обработка посылок</h3>
              <p>Посылка обрабатывается не дольше 48 часов после поступления на склад.</p>
            </div>
            <div className="client_box">
              <img src="./public/imgs/clients3.png" alt="" />
              <h3>SMS-уведомления</h3>
              <p>Отслеживайте весь процесс с помощью sms-уведомлений.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container review">
          <h1>Отзывы и цитаты блогеров:</h1>
          <div className="review_boxes">

            <div className="review_box">
              <div className="review_left">
                <img src="./public/imgs/rev4.png" alt="" />
              </div>
              <div className="review_right">
                <h3>NIKOLAY S</h3>
                <div className="rev_star">
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                </div>
                <p>
                Огонь, как всегда! Отдельное спасибо за доп.упаковку, часики от Apple пришли в простом бумажном пакете 
                </p>
                <div className="date">
                  <p><span>Дата:</span>16 Ноября 2021</p>
                  <p><span>Город:</span>Санкт-Петербург</p>
                </div>
              </div>
            </div>

            <div className="review_box">
              <div className="review_left">
                <img className='img' src="./public/imgs/rev3.png" alt="" />
              </div>
              <div className="review_right">
                <h3>DMITRIY D</h3>
                <div className="rev_star">
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                </div>
                <p>Ваша доставка самая быстрая и дешёвая!!!</p>
                <div className="date">
                  <p><span>Дата:</span>16 Ноября 2021</p>
                  <p><span>Город:</span>Москва</p>
                </div>
              </div>
            </div>
            <div className="review_box">
              <div className="review_left">
                <img src="./public/imgs/rev2.png" alt="" />
              </div>
              <div className="review_right">
                <h3>VLADIMIR E</h3>
                <div className="rev_star">
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                </div>
                <p>Пуховик Levi’s c eBay. Всё приехало быстро и целым. </p>
                <div className="date">
                  <p><span>Дата:</span>16 Ноября 2021</p>
                  <p><span>Город:</span>Санкт-Петербург</p>
                </div>
              </div>
            </div>
            <div className="review_box">
              <div className="review_left">
                <img src="./public/imgs/rev1.png" alt="" />
              </div>
              <div className="review_right">
                <h3>Оксана</h3>
                <div className="rev_star">
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                  <img src="./public/imgs/star.png" alt="" />
                </div>
                <p>Очень быстро, надежно! Как всегда большое спасибо за работу! </p>
                <div className="date">
                  <p><span>Дата:</span>16 Ноября 2021</p>
                  <p><span>Город:</span>Odintsovo</p>
                </div>
              </div>
            </div>
          </div>
          <button>Все отзывы</button>
        </div>
      </section>
      <section className='addres'>
        <div className="container">
          <h1>Ваш личный адрес в Великобритании  для покупок</h1>
          <p>
            С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!
          </p>
          <p>
            При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для снижения стоимости доставки посылок из UK в Россию.
          </p>
          <p>
            У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.
          </p>
          <p>
            Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!
          </p>
        </div>
      </section>
      <section className='send'>
        <div className="container2">
          <div className="container">
            <div className="send_left">
              <h1>Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</h1>
            </div>
            <div className="send_right">
              <input type="text" placeholder='Введите ваш email'/>
              <button>Подписаться</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home