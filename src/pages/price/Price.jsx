import React from 'react'
import "./Price.css"
import { FaWhatsapp, FaViber  } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";


function Price() {
  return (
    <>
    <section className='price'>
        <div className="container2">
          <div className="container">
            <p>Главная  /  Цены</p>
            <h1>Услуги доставки из Великобритании</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="price_boxes" >
            <div className="price_box">
              <img src="/imgs/price1.png" alt="" />
              <h3>Ваш личный адрес для покупок</h3>
              <p>на нашем современном автоматизированном складе в безналоговом Делавэре</p>
              <button>Бесплатно</button>
            </div>
            <div className="price_box">
              <img src="/imgs/price2.png" alt="" />
              <h3>Объединение нескольких посылок в одну</h3>
              <p>ведь часто отправлять несколько посылок в одной коробке гораздо выгоднее, чем по одной</p>
              <button>от £10.00</button>
            </div>
            <div className="price_box">
              <img src="/imgs/price3.png" alt="" />
              <h3>Усиленная упаковка по запросу</h3>
              <p>Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными стенками.</p>
              <button>от £0.25</button>
            </div>
            <div className="price_box">
              <img src="/imgs/price4.png" alt="" />
              <h3>Хранение входящих посылок 30 дней</h3>
              <p>чем больше срок хранения посылок на складе – тем больше вы сможете собрать</p>
              <button>Бесплатно</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container online_buying">
          <h1>Онлайн-калькулятор
            стоимости доставки товара</h1>
          <p>Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии.</p>
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
        <div className="container сервисы">
          <h1>Услуги склада</h1>
          <div className="line_boxes">
            <div className="line-m-box">
              <h4 className='first_h'>Консолидация </h4>
              <h4 className='last_h'>£1.00/1 трек</h4>
            </div>
            <div className="line-m-box">
              <h4 className='first_h'>Заполнение декларации</h4>
              <h4 className='last_h'>£1.00</h4>
            </div>
          </div>
          <div className="line_boxes">
            <div className="line-m-box">
              <h4 className='first_h'>Дополнительная упаковка </h4>
              <h4 className='last_h'>£5.00</h4>
            </div>
            <div className="line-m-box">
              <h4 className='first_h'>Упаковка xрупкиx предметов</h4>
              <h4 className='last_h'>£10.00</h4>
            </div>
          </div>
          <div className="line_boxes">
            <div className="line-m-box">
              <h4 className='first_h'>Заполнение декларации </h4>
              <h4 className='last_h'>£1.00</h4>
            </div>
            <div className="line-m-box">
              <h4 className='first_h'>Разделение заказа</h4>
              <h4 className='last_h'>£2.00</h4>
            </div>
          </div>
          <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Сборка исходящей посылки вне очереди или экспресс сборка</h4> 
                <p>Чтобы сэкономить время</p>
              </div>
              <h4 className='last_h'>£5.00</h4>
          </div>
          <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Фото содержимого входящей посылки</h4> 
                <p>3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат</p>
              </div>
              <h4 className='last_h'>£1.00 за 1 фото</h4>
            </div>
            <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Возврат вещей в магазин</h4> 
                <p>В случае, если вещи нельзя отправить в страну назначения, возврат в магазин для услуги "Виртуальный адрес"</p>
              </div>
              <h4 className='last_h'>£10 + почтовые расходы</h4>
          </div>
          <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Проверка техники на работоспособность</h4> 
                <p>Проверка электроники на включение/выключение (запрос через тикеты).</p>
              </div>
              <h4 className='last_h'>£10</h4>
            </div>
            <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Удаление инвойса</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <h4 className='last_h'>Бесплатно</h4>
          </div>
          <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Дополнительная упаковка</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <h4 className='last_h'>По договоренности</h4>
            </div>
        </div>
      </section>
      <section>
        <div className="container operator">
          <h1 className='h1_text'>Покупки с операторами Okeypost.com</h1>
          <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Быстрое оформление покупок в интернет-магазинах</h4> 
                <p className='p'>Вы присылаете ссылки, а оформлением заказов занимаются операторы Почтой.ком. Они сделают покупки за вас, проконтролируют доставку на склад и сообщат, когда всё будет готово.</p>
              </div>
              <h4 className='last_h h4_new'>5% от стоимости товаров <br />минимум £7 для каждого магазина <br />Но не менее £7 для каждого лота eBay</h4>
            </div>
            <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Фото товара по услуге "Покупка с операторами"</h4> 
                <p>Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"</p>
              </div>
              <h4 className='last_h'>£2</h4>
            </div>
        </div>
      </section>
      <section className='virt'>
        <div className="container2">
          <div className="container">
            <div className="virt_left virt_left2">
              <img src="/imgs/.cont_1.png" alt="" />
            </div>
            <div className="virt_right virt_right2">
              <h1>Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.</h1>
              <div className="send_right send_right2">
                <input type="text" placeholder='Введите ссылку на товар'/>
              </div>
              <div className="cont_btn">
                <button>Отправить</button>
                <p>Нажимая на кнопку вы подтверждаете согласие с правилами <br /> предоставления услуги и политикой конфиденциальности</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <h1 className="h1_text">
            Дополнительная упаковка
          </h1>
          <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Дополнительное страxование</h4> 
              </div>
              <h4 className='last_h last_h2'>5% от суммы на которую xотите застраxовать</h4>
            </div>
            <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Почта России и ЕМС</h4> 
              </div>
              <h4 className='last_h last_h2'>Застраxовано по умолчанию на £50.00</h4>
            </div>
            <div className="line-m-box line-max-box liners">
              <div className='first_h first_h2'>
                <h4>Мелкие пакеты</h4> 
              </div>
              <h4 className='last_h last_h2'>Застраxовано на £20.00</h4>
            </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="h1_text">
            Дополнительная упаковка
          </h1>
          <div className="line_boxes">
          <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Многослойная пленка</h4> 
                <p>Дополнительная защита покупок</p>
              </div>
              <h4 className='last_h'>£3.99</h4>
            </div>
            <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Упаковка в пакет</h4> 
                <p>Надежно защищает от влаги</p>
              </div>
              <h4 className='last_h'>£1.99</h4>
            </div>
          </div>
          <div className="line_boxes">
          <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Упаковка в коробку с двойными стенками</h4> 
                <p>Надежно защищает от влаги</p>
              </div>
              <h4 className='last_h'>£4.99</h4>
            </div>
            <div className="line-m-box line-max-box">
              <div className='first_h first_h2'>
                <h4>Наклейка “Обращаться с осторожностью”</h4> 
                <p>Дополнительная защита покупок</p>
              </div>
              <h4 className='last_h'>£0.25</h4>
            </div>
            
          </div>
          <div className="line-m-box line-max-box line-max-box1">
              <div className='first_h first_h2'>
                <h4>Наклейка “Хрупкий груз”</h4> 
                <p>Дополнительная защита покупок</p>
              </div>
              <h4 className='last_h'>£0.25</h4>
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

export default Price