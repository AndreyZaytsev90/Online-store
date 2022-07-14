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
import retryTimes = jest.retryTimes;

export type CakePropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
}

function App() {

    const [items, setItems] = useState<Array<CakePropsType>>([])
    const [cartItems, setCartItems] = useState<Array<CakePropsType>>([]) // массив для хранения товаров в корзине
    const [favorites, setFavorites] = useState<Array<CakePropsType>>([]) // массив для хранения понравившихся товаров
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

    const onAddToCard = (cake: CakePropsType) => {
        axios.post("https://62c95eb84795d2d81f7bb094.mockapi.io/cart", cake)
        setCartItems(prev => [...prev, cake]) // берем конкретное состояние и дололняем его новым объектом
    }

    const removeFromCart = (id: string) => {
        axios.delete(`https://62c95eb84795d2d81f7bb094.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddToFavorite = async (cake: CakePropsType) => {
        try {
            if (favorites.find((item) => item.id === cake.id)) {
                axios.delete(`https://62c95eb84795d2d81f7bb094.mockapi.io/favorite/${cake.id}`)
                setFavorites(prev => prev.filter(item => item.id !== cake.id))
            } else {
                const {data} = await axios.post("https://62c95eb84795d2d81f7bb094.mockapi.io/favorite", cake)
                setFavorites(prev => [...prev, data]) // data - это свойство объекта response
            }
        } catch (error) {
            alert("Не удалось добавить в закладки")
        }
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
                                                               onAddToCard={onAddToCard}
                                                               onAddToFavorite={onAddToFavorite}
                                                               onChangeSearchInput={onChangeSearchInput}
                                                               onClickSearchClear={onClickSearchClear}/>}>
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


