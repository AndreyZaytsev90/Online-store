import React, {useState} from 'react';
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import Praha from "./cakes/praha.jpg"
import Snickers from "./cakes/snikers.jpg"
import Napoleon from "./cakes/napoleon.jpg"
import Search from "./img/search.svg"
import {v1} from "uuid";

type CardsPropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
}

const cards: Array<CardsPropsType> = [
    {id: v1(), title: "Прага", price: 3299, imageUrl: Praha},
    {id: v1(), title: "Сникерс", price: 4299, imageUrl: Snickers},
    {id: v1(), title: "Наполеон", price: 5299, imageUrl: Napoleon},
]

const onClickButtonPlus = () => {
    console.log("Добавить в корзину")
}

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className={"content p-40 "}>
                <div className={"d-flex align-center justify-between mb-40"}>
                    <h1>Все рецепты</h1>
                    <div className={"search-block d-flex"}>
                        <img src={Search} alt="search"/>
                        <input type="text" placeholder={"Поиск..."}/>
                    </div>
                </div>
                <div className={"d-flex"}>

                    {cards.map(cake =>
                        <Card
                            key={cake.id}
                            title={cake.title}
                            price={cake.price}
                            imageUrl={cake.imageUrl}
                            onClickButtonFavorite={() => console.log("Добавить в закладки")}
                            onClickButtonPlus={onClickButtonPlus}
                        />)}
                </div>
            </div>
        </div>
    );
}

export default App;


