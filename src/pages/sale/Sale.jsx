import React from 'react'
import "../sale/Sale.css"
import { FaWhatsapp, FaViber  } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";

function Sale() {
  return (
    <main>
      <section className='how_to_buy'>
        <div className="container2">
          <div className="container">
            <p>Главная  /  Распродажи</p>
            <h1>Распродажи</h1>
            <h2>ранний доступ к распродажам в магазинах</h2>
            <button>Получить адрес в UK</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container sale">
          <h1>
              Black Friday Early Access <br /> 
              ранний доступ к распродажам <br />
              в магазинах Великобритании!
          </h1>
          <div className="sale_boxes">
            <div className="sale_box">
              <div className="sale_left">
                <img src="./public/imgs/sale1.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>Abercrombie & Fitch</h3>
                <div className="sale_star">
                  <p>
                     цены от <span style={{color: "black"}}>£7.99 (3365₽)</span> разделе: <br />
                     мужские вещи: <span>CLEARANCE</span><br />
                     женские вещи: <span>CLEARANCE</span>
                  </p>
                  <p>
                    качественные детские вещи
                    на <span>Abercrombie kids</span>
                  </p>
                </div>
                <div className="date">
                  <p>Только выкуп с оператором →</p>
                </div>
              </div>
            </div>
            <div className="sale_box">
              <div className="sale_left">
                <img className='img' src="./public/imgs/sale6.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>Timberland</h3>
                <div className="sale_star">
                  <p>
                  <span style={{color:"black"}}>NEW!</span> <br />
                  Коллаб <span>Tommy Hilfiger x <br /> Timberland!</span>
                  </p>
                  <p>
                  Ботинки от<span style={{color: "black"}}> £7.99 (3365₽)</span> <br />
                  Зимние шапки за<span style={{color: "black"}}> £7.99 (3365₽)</span>
                  </p>
                </div>
                <div className="date">
                  <p>Только выкуп с оператором →</p>
                </div>
              </div>
            </div>
            <div className="sale_box">
              <div className="sale_left">
                <img src="./public/imgs/sale2.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>Polo Ralph Lauren</h3>
                <div className="sale_star">
                  <p>
                    <span>Рубашка</span> за <span style={{color: "black"}}>£7.99 (3365₽)</span> <br />
                    <span>Худи</span> за <span style={{color: "black"}}>£7.99 (3365₽)</span> <br />
                    <span>Свитшот</span> с лого за <span style={{color: "black"}}>£7.99 (3365₽)</span>
                  </p>
                  <p>
                    До - <span style={{color: "black"}}>40%</span> в разделе SALE 
                  </p>
                </div>
                <div className="date">
                  <p>Только выкуп с оператором →</p>
                </div>
              </div>
            </div>
            <div className="sale_box">
              <div className="sale_left">
                <img src="./public/imgs/sale7.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>Hollister Co.</h3>
                <div className="sale_star">
                  <p>
                    цены от <span style={{color: "black"}}>£7.99 (3365₽)</span> разделе: <br />
                    мужские вещи: <span>CLEARANCE</span> <br />
                    женские вещи: <span>CLEARANCE</span>
                  </p>
                </div>
                <div style={{marginTop: "100px"}} className="date">
                  <p>Только выкуп с оператором →</p>
                </div>
              </div>
            </div>
            <div className="sale_box">
              <div className="sale_left">
                <img src="./public/imgs/sale3.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>Michael Kors</h3>
                <div className="sale_star">
                  <p style={{color: "black", fontWeight: "800"}}>
                    Новая коллекция! <br />
                    Michael Kors x 007 (James Bond)
                  </p>
                  <p>
                  <span style={{color: "black"}}>HOLIDAY HEAD START <br />
                  - 60%</span> на сумки, обувь и одежду
                  </p>
                </div>
                <div className="date">
                  <p>В магазин →</p>
                </div>
              </div>
            </div>

            <div className="sale_box">
              <div className="sale_left">
                <img className='img' src="./public/imgs/sale8.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>Аутлет Saks OFF 5TH</h3>
                <div className="sale_star">
                  <p>
                   <span style={{color: "black"}}>Black Friday Early Access</span> <br />
                    Брендовые шапки, шарфы и перчатки - <span style={{color: "black"}}>60% OFF</span> 
                  </p>
                  <p>
                  Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger
                  </p>
                </div>
                <div className="date">
                  <p>Только выкуп с оператором →</p>
                </div>
              </div>
            </div>
            <div className="sale_box">
              <div className="sale_left">
                <img src="./public/imgs/sale4.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>Victoria's Secret</h3>
                <div className="sale_star">
                  <p>
                    <span style={{color: "black"}}>
                    Лосьоны и мисты за £7.99 (3365₽) <br />
                    7 трусиков за £7.99 (3365₽) <br />
                    </span>
                    Халаты за <span style={{color: "black"}}>£7.99 (3365₽)</span>
                  </p>
                  <p style={{fontSize: "13px"}}>
                  <span style={{color: "black"}}>Потрать £7.99 (3365₽)</span> - получи <span style={{color: "black"}}>купон на $25</span> на следующий заказ
                  </p>
                </div>
                <div className="date">
                  <p>В магазин →</p>
                </div>
              </div>
            </div>
            <div className="sale_box">
              <div className="sale_left">
                <img src="./public/imgs/sale9.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>levi.com</h3>
                <div className="sale_star">
                  <p style={{marginBottom: "60px"}}>
                    <span>Джинсы</span> от <span style={{color: "black"}}>£7.99 (3365₽)</span>
                  </p>
                  <p>
                    <span style={{color: "black"}}>
                    Скидка 30% на заказы от $100 с кодом TREAT30
                    </span>
                  </p>
                </div>
                <div style={{marginTop: "100px"}} className="date">
                  <p>В магазин →</p>
                </div>
              </div>
            </div>
            <div className="sale_box">
              <div className="sale_left">
                <img src="./public/imgs/sale5.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>UGG® - вход с VPN</h3>
                <div className="sale_star">
                  <p>
                    Угги за <span style={{color: "black"}}>£7.99 (3365₽)</span> <br />
                    Ботинки UGG от <span style={{color: "black"}}>£7.99 (3365₽)</span> <br />
                    в разделе <span>SALE</span>
                  </p>
                  <p style={{fontSize: "13px"}}>
                  <span>Мужские угги</span> за <span style={{color: "black"}}>£7.99 (3365₽)</span> <br />
                  <span>Слипперы</span> за <span style={{color: "black"}}>£7.99 (3365₽)</span>
                  </p>
                </div>
                <div className="date">
                  <p>Только выкуп с оператором →</p>
                </div>
              </div>
            </div>
            <div className="sale_box">
              <div className="sale_left">
                <img src="./public/imgs/sale10.png" alt="" />
              </div>
              <div className="sale_right">
                <h3>Hollister Co.</h3>
                <div className="sale_star">
                  <p>
                    <span style={{color: "black"}}>Вход с VPN <br />
                    - 30%</span>  на некоторые модели <br />
                    <span style={{color: "black"}}>Бесплатная</span> доставка <span style={{color: "black"}}>$50+</span>
                  </p>
                </div>
                <div style={{marginTop: "100px"}} className="date">
                  <p>Только выкуп с оператором →</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sale_slide">
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

export default Sale