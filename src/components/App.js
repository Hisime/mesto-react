import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
          />
          <Footer/>
          <PopupWithForm name={'edit'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups}/>
          <PopupWithForm name={'add'} title={'Новое место'} isOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups}/>
          <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups}/>


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
      </div>
  );
}

export default App;
