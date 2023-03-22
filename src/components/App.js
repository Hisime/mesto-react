import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

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
    setSelectedCard(false);
  }

  return (
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
          />
          <Footer/>
          <PopupWithForm name={'edit'} title={'Редактировать профиль'} buttonText='Сохранить' isOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups}/>
          <PopupWithForm name={'add'} title={'Новое место'} buttonText='Создать' isOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups}/>
          <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups}/>
          <ImagePopup card={selectedCard} onClose={closePhotoPopup} />
        </div>
      </div>
  );
}

export default App;
