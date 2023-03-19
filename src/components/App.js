import Header from "./Header";

function App() {
  return (
      <div className="page">
      <div className="page__container">
        <Header/>
        <main>
          <section className="profile">
            <div className="profile__avatar">
              <img className="profile__image" src="<%=require('./images/profile.jpg')%>" alt="Аватар"/>
                <button className="profile__edit-avatar"></button>
            </div>

            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button className="profile__edit" type="button" aria-label="Редактировать"></button>
              <p className="profile__description"></p>
            </div>
            <button className="profile__add" type="button" aria-label="Добавить"></button>
          </section>
          <section className="gallery">
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2022 Mesto Russia</p>
        </footer>
        <div className="popup popup_type_edit">
          <div className="popup__container popup-wrapper">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="profile-form" noValidate>
              <input className="popup__input popup__input_type_name" id="input-name" name="input-name" type="text"
                     minLength="2" maxLength="40" placeholder="Имя" required/>
                <span className="popup__input-error input-name-error"></span>
                <input className="popup__input popup__input_type_job" id="input-job" name="input-job" type="text"
                       minLength="2" maxLength="200" placeholder="О себе" required/>
                  <span className="popup__input-error input-job-error"></span>
                  <button className="popup__save" type="submit">Сохранить</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_add">
          <div className="popup__container popup-wrapper">
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="add-card-form" noValidate>
              <input className="popup__input popup__input_type_title" id="input-title" name="input-title" type="text"
                     placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="popup__input-error input-title-error"></span>
                <input className="popup__input popup__input_type_link" id="input-link" name="input-link" type="url"
                       placeholder="Ссылка на картинку" required/>
                  <span className="popup__input-error input-link-error"></span>
                  <button className="popup__save" type="submit">Создать</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_photo">
          <div className="popup__image-container popup-wrapper">
            <img className="popup__image"
                 src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" alt="Байкал"/>
              <span className="popup__photo-name">Байкал</span>
              <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_confirm">
          <div className="popup__container popup-wrapper">
            <h2 className="popup__title popup__title_indent">Вы уверены?</h2>
            <button className="popup__save" type="button">Да</button>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_avatar">
          <div className="popup__container popup-wrapper">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="change-avatar-form" noValidate>
              <input className="popup__input popup__input_type_link" id="avatar-link" name="avatar-link" type="url"
                     placeholder="Ссылка на аватар" required/>
                <span className="popup__input-error avatar-link-error"></span>
                <button className="popup__save" type="submit">Сохранить</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
      </div>
      <template id="gallery-item-template">
        <div className="gallery__item">
          <img className="gallery__image"
               src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" alt="Байкал"/>
            <button className="gallery__delete-button"></button>
            <div className="gallery__bottom">
              <h2 className="gallery__city"></h2>
              <div className="gallery__right">
                <button className="gallery__favorite" type="button" aria-label="Добавить в избранное"></button>
                <span className="gallery__like"></span>
              </div>
            </div>
        </div>
      </template>

      </div>
  );
}

export default App;
