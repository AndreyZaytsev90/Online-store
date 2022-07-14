import React, {ChangeEvent} from 'react';
import Search from "../img/search.svg";
import ButtonRemove from "../img/button-remove.svg";
import {CardsPropsType} from "../App";
import {Card} from "../components/Card/Card";

type FavoritesPropsType = {
    searchValue: string
    onClickSearchClear: () => void
    onChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void
    favorites: Array<CardsPropsType>
    onFavorite: (cake: CardsPropsType) => void
    onPlus: (cake: CardsPropsType) => void
    onAddToFavorite: (cake: CardsPropsType) => void
    onAddToCard: (cake: CardsPropsType) => void
}

export const Favorites = (props: FavoritesPropsType) => {
    return (
        <div className={"content p-40 "}>
            <div className={"d-flex align-center justify-between mb-40"}>
                <h1>{props.searchValue ? `Поиск по запросу "${props.searchValue}"` : `Мои закладки`}</h1>
                <div className={"search-block d-flex"}>
                    <img src={Search} alt="search"/>
                    {props.searchValue && <img onClick={props.onClickSearchClear}
                                               className={"clear cu-p"}
                                               src={ButtonRemove}
                                               alt="clear"/>}
                    <input value={props.searchValue}
                           onChange={props.onChangeSearchInput}
                           type="text"
                           placeholder={"Поиск..."}/>
                </div>
            </div>
            <div className={"d-flex flex-wrap"}>
                {props.favorites ? props.favorites.filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map(f =>
                    <Card id={f.id}
                          title={f.title}
                          price={f.price}
                          imageUrl={f.imageUrl}
                          onPlus={(cake) => props.onAddToCard(cake)}
                          onFavorite={(cake) => props.onAddToFavorite(cake)}
                          favorited={true}
                    />) : null}
            </div>
        </div>
    );
};

