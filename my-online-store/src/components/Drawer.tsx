import React from 'react';
import ButtonRemove from "../img/button-remove.svg"
import Arrow from "../img/arrow.svg"
import BackArrow from "../img/backArrow.svg"
import EmptyCart from "../img/empty-cart.svg"
import {CakePropsType} from "../App";

type DrawerPropsType = {
    onClose: () => void
    cartItems: Array<CakePropsType>
    removeFromCart: (id: string) => void
}

export const Drawer = (props: DrawerPropsType) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className={"d-flex justify-between mb-30"}>Корзина
                    <img onClick={props.onClose} className={"removeButton cu-p"} src={ButtonRemove} alt="close"/>
                </h2>


                {props.cartItems.length > 0 ? (
                    <div>
                        <div className="items">
                            {props.cartItems.map(cake => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{backgroundImage: `url(${cake.imageUrl})`}}
                                        className={"cartItemImg"}></div>

                                    <div className={"mr-20 mb-15 flex"}>
                                        <p className={"mb-5"}>{cake.title}</p>
                                        <b>{cake.price} руб.</b>
                                    </div>
                                    <img onClick={() => props.removeFromCart(cake.id)} className={"removeButton"}
                                         src={ButtonRemove}
                                         alt="remove"/>
                                </div>
                            ))}
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
                                <button className={"greenButton"}>Оформить заказ <img src={Arrow} alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={"cartEmpty d-flex align-center justify-center flex-column flex"}>
                        <img className={"mb-20"} width={120} height={120} src={EmptyCart} alt="emptyCart"/>
                        <h2>Корзина пустая</h2>
                        <p className={"opacity-6"}>Добавьте хотя бы один пирог для того, чтобы сделать заказ</p>
                        <button onClick={props.onClose} className={"greenButton"}>
                            <img src={BackArrow} alt="arrow"/>Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
