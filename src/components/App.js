import {useEffect, useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  function closePhotoPopup() {
    setSelectedCard(null);
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__container">
            <Header/>
            <Main onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
            />
            <Footer/>
            <PopupWithForm name={'edit'} title={'Редактировать профиль'} buttonText='Сохранить' isOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups}>
              <input className="popup__input popup__input_type_name" id="input-name" name="input-name" type="text"
                     minLength="2" maxLength="40" placeholder="Имя" required/>
              <span className="popup__input-error input-name-error"></span>
              <input className="popup__input popup__input_type_job" id="input-job" name="input-job" type="text"
                     minLength="2" maxLength="200" placeholder="О себе" required/>
              <span className="popup__input-error input-job-error"></span>
            </PopupWithForm>

            <PopupWithForm name={'add'} title={'Новое место'} buttonText='Создать' isOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups}>
              <input className="popup__input popup__input_type_title" id="input-title" name="input-title" type="text"
                     placeholder="Название" minLength="2" maxLength="30" required/>
              <span className="popup__input-error input-title-error"></span>
              <input className="popup__input popup__input_type_link" id="input-link" name="input-link" type="url"
                     placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error input-link-error"></span>
            </PopupWithForm>

            <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups}>
              <input className="popup__input popup__input_type_link" id="avatar-link" name="avatar-link" type="url"
                     placeholder="Ссылка на аватар" required/>
              <span className="popup__input-error avatar-link-error"></span>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closePhotoPopup} />
          </div>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
