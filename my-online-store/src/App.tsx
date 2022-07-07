import React from 'react';
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
                            onClick={() => console.log(cake)}
                        />)}

                    {/* <div className={"card"}>
                        <div className={"favorite"}>
                            <img src="/img/heart-unliked.svg" alt="heart-unliked"/>
                        </div>
                        <img width={133} height={112} src="/cakes/praha.jpg" alt="Прага"/>
                        <h5>Прага</h5>
                        <div className={"d-flex justify-between align-center"}>
                            <div className={"d-flex flex-column"}>
                                <span>Цена:</span>
                                <b>3299 руб.</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src="/img/button+.svg" alt="+"/>
                            </button>
                        </div>

                    </div>
                    <div className={"card"}>
                        <img width={133} height={112} src="/cakes/snikers.jpg" alt="Прага"/>
                        <h5>Сникерс</h5>
                        <div className={"d-flex justify-between align-center"}>
                            <div className={"d-flex flex-column"}>
                                <span>Цена:</span>
                                <b>3299 руб.</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src="/img/button+.svg" alt="+"/>
                            </button>
                        </div>

                    </div>
                    <div className={"card"}>
                        <img width={133} height={112} src="/cakes/napoleon.jpg" alt="Прага"/>
                        <h5>Наполеон</h5>
                        <div className={"d-flex justify-between align-center"}>
                            <div className={"d-flex flex-column"}>
                                <span>Цена:</span>
                                <b>3299 руб.</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src="/img/button+.svg" alt="+"/>
                            </button>
                        </div>

                    </div>*/}

                </div>

            </div>
        </div>
    );
}

export default App;
