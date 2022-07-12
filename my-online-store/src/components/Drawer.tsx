import React from 'react';
import ButtonRemove from "../img/button-remove.svg"
import Arrow from "../img/arrow.svg"
import {CardsPropsType} from "../App";

type DrawerPropsType = {
    onClose: () => void
    cartItems: Array<CardsPropsType>
    removeFromCart: (id: string) => void
}

export const Drawer = (props: DrawerPropsType) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className={"d-flex justify-between mb-30"}>Корзина
                    <img onClick={props.onClose} className={"removeButton cu-p"} src={ButtonRemove} alt="close"/>
                </h2>

                <div className="items" style={{"flex": 1}}>

                    {props.cartItems.map(cake => (
                        <div className="cartItem d-flex align-center mb-30">
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
                    <button className={"greenButton"}>Оформить заказ <img src={Arrow} alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
};
