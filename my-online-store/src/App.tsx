import React, {useEffect, useState} from 'react';
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import Search from "./img/search.svg"

export type CardsPropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
}

function App() {

    const [items, setItems] = useState<Array<CardsPropsType>>([])
    const [cartItems, setCartItems] = useState<Array<CardsPropsType>>([]) // массив для хранения товаров в корзине
    const [cartOpened, setCartOpened] = useState(false)

    useEffect(() => {
        fetch("https://62c95eb84795d2d81f7bb094.mockapi.io/items").then((res) => {
            return res.json()
        }).then(json => {
            //console.log(json)
            setItems(json)
        })
    }, [])

    const onAddToCard = (cake: CardsPropsType) => {
       setCartItems(prev => [...prev, cake]) // берем конкретное состояние и дололняем его новым объектом
    }

    const removeFromCart = (id: string) => {
        setCartItems(cartItems.filter(obj => obj.id !== id))
    }

    return (
        <div className="wrapper clear">
            {cartOpened ?
                <Drawer
                    onClose={() => setCartOpened(false)}
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                /> : null}

            <Header setCartOpened={() => setCartOpened(true)}/>
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
                            id={cake.id}
                            title={cake.title}
                            price={cake.price}
                            imageUrl={cake.imageUrl}
                            onClickButtonFavorite={() => console.log("Добавить в закладки")}
                            onClickButtonPlus={(cake) => onAddToCard(cake)}
                        />)}
                </div>
            </div>
        </div>
    );
}

export default App;


