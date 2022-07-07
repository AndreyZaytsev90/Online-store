import React from 'react';
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";


function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className={"content p-40 "}>
                <div className={"d-flex align-center justify-between mb-40"}>
                    <h1>Все рецепты</h1>
                    <div className={"search-block d-flex"}>
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder={"Поиск..."}/>
                    </div>
                </div>
                <div className={"d-flex"}>

                    <Card name={"Прага"} count={3299}/>
                    <Card name={"Прага"} count={3299}/>
                    <Card name={"Прага"} count={3299}/>

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
