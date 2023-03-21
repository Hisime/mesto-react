import React from "react";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <div className="gallery__item">
            <img className="gallery__image"
                 onClick={handleClick}
                 src={props.card.link}
                 alt={props.name}/>
            <button className="gallery__delete-button"></button>
            <div className="gallery__bottom">
                <h2 className="gallery__city">{props.card.name}</h2>
                <div className="gallery__right">
                    <button className="gallery__favorite" type="button"
                            aria-label="Добавить в избранное"></button>
                    <span className="gallery__like">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;