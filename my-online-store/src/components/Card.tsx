import React from 'react';

type CardPropsType = {
    name: string
    count: number
}

export const Card = (props: CardPropsType) => {
    return (
        <div className={"card"}>
            <div className={"favorite"}>
                <img src="/img/heart-unliked.svg" alt="heart-unliked"/>
            </div>
            <img width={133} height={112} src="/cakes/praha.jpg" alt="Прага"/>
            <h5>{props.name}</h5>
            <div className={"d-flex justify-between align-center"}>
                <div className={"d-flex flex-column"}>
                    <span>Цена:</span>
                    <b>{props.count} руб.</b>
                </div>
                <button className={"button"}>
                    <img width={11} height={11} src="/img/button+.svg" alt="+"/>
                </button>
            </div>

        </div>
    );
};
