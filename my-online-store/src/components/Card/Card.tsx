import React, {useEffect, useState, MouseEvent} from 'react';
import HeartUnliked from "../../img/heart-unliked.svg"
import ButtonPlus from "../../img/button+.svg"
import ButtonChecked from "../../img/button-checked.svg"
import style from "./Card.module.scss"

type CardPropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
    onClickButtonFavorite: () => void
    onClickButtonPlus: (cake: CardPropsType) => void
}

export const Card = (props: CardPropsType) => {

    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = (cake: CardPropsType) => {
        props.onClickButtonPlus(cake)
        setIsAdded(!isAdded)
    }

    useEffect(() => {
        //console.log("Переменная изменилась")
    }, [isAdded])


    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img src={HeartUnliked} alt="heart-unliked" onClick={props.onClickButtonFavorite}/>
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
