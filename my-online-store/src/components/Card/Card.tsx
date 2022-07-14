import React, {useEffect, useState, MouseEvent} from 'react';
import HeartUnliked from "../../img/heart-unliked.svg"
import HeartLiked from "../../img/heart-liked.svg"
import ButtonPlus from "../../img/button+.svg"
import ButtonChecked from "../../img/button-checked.svg"
import style from "./Card.module.scss"
import {CakePropsType} from "../../App";

type CardPropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
    onFavorite: (cake: CakePropsType) => void
    onPlus: (cake: CakePropsType) => void
    favorited?: boolean
}

export const Card = (props: CardPropsType) => {

    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState<boolean | undefined>(props.favorited)

    const onClickPlus = (cake: CakePropsType) => {
        props.onPlus(cake)
        setIsAdded(!isAdded)
    }

    const onClickFavorite = (cake: CakePropsType) => {
        props.onFavorite(cake)
        setIsFavorite(!isFavorite)
    }

    useEffect(() => {
        //console.log("Переменная изменилась")
    }, [isAdded])


    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img src={isFavorite ? HeartLiked : HeartUnliked}
                     alt="heart-unliked"
                     onClick={() => onClickFavorite(props)}
                />
            </div>
            <img className={"ml-10"} width={133} height={112} src={props.imageUrl} alt="Прага"/>
            <h5>{props.title}</h5>
            <div className={"d-flex justify-between align-center"}>
                <div className={"d-flex flex-column"}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img
                    className={style.plus}
                    onClick={() => onClickPlus(props)}
                    src={isAdded ? ButtonChecked : ButtonPlus}
                    alt="+"
                />
            </div>
        </div>
    );
};
