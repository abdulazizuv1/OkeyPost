import React from 'react'
import "./Modal.css"

function Modal() {
  return (
    <div className='modal'>
        <form action="">
            <h2>Выполните вход в ваш личный кабинет </h2>
            <p>Номер телефона:</p>
            <input type="text" />
            <p>Ваш email:</p>
            <input type="text" />
            <p>Ваш пароль:</p>
            <input type="text" />
        </form>
        <p style={{color: "#01CD7D"}}>Восстановление пароля <span style={{color : "#1F2428"}}>или</span> быстрая регистрация</p>
        <div className="btn_modal">
            <button>Войти</button>
            <div className="modal-apps">
                <div className="fb">
                    <img src="./public/imgs/google.png" alt="" />
                </div>
                <div className="">
                    <img src="./public/imgs/fb.png" alt="" />
                </div>
                <div className="fb">
                    <img src="./public/imgs/vk.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal