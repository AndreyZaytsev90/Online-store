import React, {ChangeEvent} from 'react';
import Search from "../img/search.svg";
import ButtonRemove from "../img/button-remove.svg";
import {Card} from "../components/Card/Card";
import {CardsPropsType} from "../App";

type HomePropsType = {
    searchValue: string
    onClickSearchClear: () => void
    onChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void
    items: Array<CardsPropsType>
    onAddToFavorite: (cake: CardsPropsType) => void
    onAddToCard: (cake: CardsPropsType) => void
}

export const Home = (props: HomePropsType) => {

    const onPlus = (cake: CardsPropsType) => props.onAddToCard(cake)
    const onFavorite = (cake: CardsPropsType) => props.onAddToFavorite(cake)

    return (
        <div className={"content p-40 "}>
            <div className={"d-flex align-center justify-between mb-40"}>
                <h1>{props.searchValue ? `Поиск по запросу "${props.searchValue}"` : `Все рецепты`}</h1>
                <div className={"search-block d-flex"}>
                    <img src={Search} alt="search"/>
                    {props.searchValue &&
                     <img onClick={props.onClickSearchClear} className={"clear cu-p"} src={ButtonRemove} alt="clear"/>}
                    <input value={props.searchValue} onChange={props.onChangeSearchInput} type="text"
                           placeholder={"Поиск..."}/>
                </div>
            </div>
            <div className={"d-flex flex-wrap"}>
                {props.items.filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map(cake =>
                    <Card
                        key={cake.id}
                        id={cake.id}
                        title={cake.title}
                        price={cake.price}
                        imageUrl={cake.imageUrl}
                        onPlus={onPlus}
                        onFavorite={onFavorite}
                    />)}
            </div>
        </div>
    );
};

