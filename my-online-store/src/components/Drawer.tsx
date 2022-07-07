import React from 'react';

export const Drawer = () => {
    return (
        <div style={{display: "none"}} className="overlay">
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
                    <button className={"greenButton"}>Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
};
