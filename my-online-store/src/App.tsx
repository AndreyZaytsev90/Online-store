import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import Search from "./img/search.svg"
import ButtonRemove from "./img/button-remove.svg";

export type CardsPropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
}

function App() {

    const [items, setItems] = useState<Array<CardsPropsType>>([])
    const [cartItems, setCartItems] = useState<Array<CardsPropsType>>([]) // массив для хранения товаров в корзине
    const [searchValue, setSearchValue] = useState("")
    const [cartOpened, setCartOpened] = useState(false)

    useEffect(() => {
        /*fetch("https://62c95eb84795d2d81f7bb094.mockapi.io/items").then((res) => {
            return res.json()
        }).then(json => {
            //console.log(json)
            setItems(json)
        })*/
        axios.get("https://62c95eb84795d2d81f7bb094.mockapi.io/items").then(res => {
            setItems(res.data)
        })
        axios.get("https://62c95eb84795d2d81f7bb094.mockapi.io/cart").then(res => {
            setCartItems(res.data)
        })
    }, [])

    const onAddToCard = (cake: CardsPropsType) => {
        axios.post("https://62c95eb84795d2d81f7bb094.mockapi.io/cart", cake)
        setCartItems(prev => [...prev, cake]) // берем конкретное состояние и дололняем его новым объектом
    }

    const removeFromCart = (id: string) => {
        axios.delete(`https://62c95eb84795d2d81f7bb094.mockapi.io/cart/${id}`)
       // setCartItems(cartItems.filter(obj => obj.id !== id))
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    const onClickSearchClear = () => {
        setSearchValue("")
    }

    return (
        <div className="wrapper clear" key={"1"}>
            {cartOpened ?
                <Drawer
                    onClose={() => setCartOpened(false)}
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                /> : null}

            <Header setCartOpened={() => setCartOpened(true)}/>
            <div className={"content p-40 "}>
                <div className={"d-flex align-center justify-between mb-40"}>
                    <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : `Все рецепты`}</h1>
                    <div className={"search-block d-flex"}>
                        <img src={Search} alt="search"/>
                        {searchValue &&
                            <img onClick={onClickSearchClear} className={"clear cu-p"} src={ButtonRemove} alt="clear"/>}
                        <input value={searchValue} onChange={onChangeSearchInput} type="text" placeholder={"Поиск..."}/>
                    </div>
                </div>
                <div className={"d-flex flex-wrap"}>
                    {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(cake =>
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


