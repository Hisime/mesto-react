import profileImage from '../images/profile.jpg';

function Main(props) {
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__image" src={profileImage} alt="Аватар"/>
                    <button className="profile__edit-avatar" onClick={props.onEditAvatar}></button>
                </div>

                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <button className="profile__edit" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                    <p className="profile__description"></p>
                </div>
                <button className="profile__add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="gallery">
            </section>
        </main>
    )
}

export default Main;