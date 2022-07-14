import React, {ChangeEvent, useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import Search from "./img/search.svg"
import ButtonRemove from "./img/button-remove.svg";
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";

export type CardsPropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
}

function App() {

    const [items, setItems] = useState<Array<CardsPropsType>>([])
    const [cartItems, setCartItems] = useState<Array<CardsPropsType>>([]) // массив для хранения товаров в корзине
    const [favorites, setFavorites] = useState<Array<CardsPropsType>>([]) // массив для хранения понравившихся товаров
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
        axios.get("https://62c95eb84795d2d81f7bb094.mockapi.io/favorite").then(res => {
            setFavorites(res.data)
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

    const onAddToFavorite = (cake: CardsPropsType) => {
        axios.post("https://62c95eb84795d2d81f7bb094.mockapi.io/favorite", cake)
        setFavorites(prev => [...prev, cake]) // берем конкретное состояние и дололняем его новым объектом
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

            <Routes>
                <Route path={"/favorites"} element={<Favorites favorites={favorites}
                                                               searchValue={searchValue}
                                                               onClickSearchClear={onClickSearchClear}
                                                               onChangeSearchInput={onChangeSearchInput}
                                                               onAddToFavorite={onAddToFavorite}
                                                               onAddToCard={onAddToCard}
                                                               onPlus={(cake) => onAddToCard(cake)}
                                                               onFavorite={(cake) => onAddToFavorite(cake)}
                />}>
                </Route>
                <Route path={"/home"} element={<Home items={items}
                                                     searchValue={searchValue}
                                                     onAddToCard={onAddToCard}
                                                     onAddToFavorite={onAddToFavorite}
                                                     onChangeSearchInput={onChangeSearchInput}
                                                     onClickSearchClear={onClickSearchClear}/>}>
                </Route>
            </Routes>

        </div>
    );
}

export default App;


