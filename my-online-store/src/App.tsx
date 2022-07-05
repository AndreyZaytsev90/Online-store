import React from 'react';


function App() {
    return (
        <div className="wrapper clear">
            <header className={"d-flex justify-between align-center p-40"}>
                <div className={"d-flex align-center"}>
                    <img className={"mr-15"} src="/img/icon.svg" alt="icon" width={40} height={40}/>
                    <div>
                        <h3 className={"text-uppercase"}>Домашние рецепты</h3>
                        <p className={"opacity-5"}>Самые вкусные блюда</p>
                    </div>
                </div>
                <ul className={"d-flex"}>
                    <li className={"mr-30"}>
                        <img src="/img/cart.svg" alt="cart"/>
                        <span>1025 руб.</span>
                    </li>
                    <li>
                        <img src="/img/like.svg" alt="like"/>

                    </li>
                    <li>
                        <img width={20} height={20} src="/img/user.svg" alt="user"/>
                    </li>
                </ul>
            </header>
            <div className={"content p-40"}>
                <h1>Все рецепты</h1>

              <div className={"d-flex"}>
                  <div className={"card"}>
                      <img width={133} height={112} src="/cakes/praha.jpg" alt="Прага"/>
                      <h5>Прага</h5>
                      <div className={"d-flex justify-between align-center"}>
                          <div className={"d-flex flex-column"}>
                              <span>Цена:</span>
                              <b>3299 руб.</b>
                          </div>
                          <button className={"button"}>
                              <img width={11} height={11} src="/img/button+.svg" alt="+"/>
                          </button>
                      </div>

                  </div>
                  <div className={"card"}>
                      <img width={133} height={112} src="/cakes/snikers.jpg" alt="Прага"/>
                      <h5>Сникерс</h5>
                      <div className={"d-flex justify-between align-center"}>
                          <div className={"d-flex flex-column"}>
                              <span>Цена:</span>
                              <b>3299 руб.</b>
                          </div>
                          <button className={"button"}>
                              <img width={11} height={11} src="/img/button+.svg" alt="+"/>
                          </button>
                      </div>

                  </div>
                  <div className={"card"}>
                      <img width={133} height={112} src="/cakes/napoleon.jpg" alt="Прага"/>
                      <h5>Наполеон</h5>
                      <div className={"d-flex justify-between align-center"}>
                          <div className={"d-flex flex-column"}>
                              <span>Цена:</span>
                              <b>3299 руб.</b>
                          </div>
                          <button className={"button"}>
                              <img width={11} height={11} src="/img/button+.svg" alt="+"/>
                          </button>
                      </div>

                  </div>
              </div>

            </div>
        </div>
    );
}

export default App;
