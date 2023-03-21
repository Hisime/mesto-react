import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUser(), api.getCards()])
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__image" src={userAvatar} alt="Аватар"/>
                    <button className="profile__edit-avatar" onClick={props.onEditAvatar}></button>
                </div>

                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="gallery">
                {cards.map((card) =>
                    <Card key={card._id} onCardClick={props.onCardClick} card={card}/>
                )}
            </section>
        </main>
    )
}

export default Main;