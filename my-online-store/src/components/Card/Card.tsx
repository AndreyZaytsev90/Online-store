import React  from 'react';
import HeartUnliked from "../../img/heart-unliked.svg"
import ButtonPlus from "../../img/button+.svg"
import style from "./Card.module.scss"

type CardPropsType = {
    title: string
    price: number
    imageUrl: string
    onClick: () => void
}

console.log(style)

export const Card = (props: CardPropsType) => {
    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img src={HeartUnliked} alt="heart-unliked"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Прага"/>
            <h5>{props.title}</h5>
            <div className={"d-flex justify-between align-center"}>
                <div className={"d-flex flex-column"}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={"button"} onClick={props.onClick}>
                    <img width={11} height={11} src={ButtonPlus} alt="+"/>
                </button>
            </div>

        </div>
    );
};