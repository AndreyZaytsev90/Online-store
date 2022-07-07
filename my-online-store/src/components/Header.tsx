import React from 'react';

export const Header = () => {
    return (
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
    );
};

