import React from 'react';


function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2 className={"d-flex justify-between mb-30"}>Корзина
                        <img className={"removeButton cu-p"} src="/img/button-remove.svg" alt="remove"/>
                    </h2>

                    <div className="items" style={{"flex": 1}}>
                        <div className="cartItem d-flex align-center mb-30">
                            <img className={"mr-20"}
                                 width={90}
                                 height={90}
                                 src="/cakes/praha.jpg"
                                 alt="Прага"/>
                            <div className={"mr-20 mb-15"}>
                                <p className={"mb-5"}>Прага</p>
                                <b>3299 руб.</b>
                            </div>
                            <img className={"removeButton"} src="/img/button-remove.svg" alt="remove"/>
                        </div>

                        <div className="cartItem d-flex align-center mb-30">
                            <img className={"mr-20"}
                                 width={90}
                                 height={90}
                                 src="/cakes/snikers.jpg"
                                 alt="Прага"/>
                            <div className={"mr-20 mb-15"}>
                                <p className={"mb-5"}>Сникерс</p>
                                <b>3299 руб.</b>
                            </div>
                            <img className={"removeButton"} src="/img/button-remove.svg" alt="remove"/>
                        </div>
                    </div>
                    <div className={"cartTotalBlock"}>
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>6598 руб.</b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>330 руб.</b>
                            </li>
                        </ul>
                        <button className={"greenButton"}>Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                    </div>
                </div>
            </div>

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
                        <span>3299 руб.</span>
                    </li>
                    <li>
                        <img src="/img/like.svg" alt="like"/>

                    </li>
                    <li>
                        <img width={20} height={20} src="/img/user.svg" alt="user"/>
                    </li>
                </ul>
            </header>
            <div className={"content p-40 "}>
                <div className={"d-flex align-center justify-between mb-40"}>
                    <h1>Все рецепты</h1>
                    <div className={"search-block d-flex"}>
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder={"Поиск..."}/>
                    </div>
                </div>


                <div className={"d-flex"}>
                    <div className={"card"}>
                        <div className={"favorite"}>
                            <img src="/img/heart-unliked.svg" alt="heart-unliked"/>
                        </div>
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
