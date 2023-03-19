import React from "react";
import api from "../utils/api";

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    React.useEffect(() => {
        api.getUser().then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
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
            </section>
        </main>
    )
}

export default Main;