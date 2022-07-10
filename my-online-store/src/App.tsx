import React, {useState} from 'react';
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import Search from "./img/search.svg"

type CardsPropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
}

/*const cards: Array<CardsPropsType> = [
    {id: "1", title: "Прага", price: 3299, imageUrl: "Praha"},
    {id: "2", title: "Сникерс", price: 4299, imageUrl: "Snickers"},
    {id: "3", title: "Наполеон", price: 5299, imageUrl: "Napoleon"},
]*/

const onClickButtonPlus = () => {
    console.log("Добавить в корзину")
}

function App() {

    const [items, setItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)

    return (
        <div className="wrapper clear">
            { cartOpened ? <Drawer onClose = {() => setCartOpened(false)}/> : null }
            <Header setCartOpened = {() => setCartOpened(true)}/>
            <div className={"content p-40 "}>
                <div className={"d-flex align-center justify-between mb-40"}>
                    <h1>Все рецепты</h1>
                    <div className={"search-block d-flex"}>
                        <img src={Search} alt="search"/>
                        <input type="text" placeholder={"Поиск..."}/>
                    </div>
                </div>
                <div className={"d-flex flex-wrap"}>

                    {items.map(cake =>
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


