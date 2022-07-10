import React from 'react';
import Icon from "../img/icon.svg"
import Cart from "../img/cart.svg"
import Like from "../img/like.svg"
import User from "../img/user.svg"

type HeaderPropsType = {
    setCartOpened: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={"d-flex justify-between align-center p-40"}>
            <div className={"d-flex align-center"}>
                <img className={"mr-15"} src={Icon} alt="icon" width={40} height={40}/>
                <div>
                    <h3 className={"text-uppercase"}>Домашние рецепты</h3>
                    <p className={"opacity-5"}>Самые вкусные блюда</p>
                </div>
            </div>
            <ul className={"d-flex"}>
                <li onClick={props.setCartOpened} className={"mr-30 cu-p"}>
                    <img src={Cart} alt="cart"/>
                    <span>3299 руб.</span>
                </li>
                <li>
                    <img src={Like} alt="like"/>

                </li>
                <li>
                    <img width={20} height={20} src={User} alt="user"/>
                </li>
            </ul>
        </header>
    );
};

