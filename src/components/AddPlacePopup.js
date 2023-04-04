import PopupWithForm from "./PopupWithForm";
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name,
            link,
        });
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    return (
        <PopupWithForm name={'add'} title={'Новое место'} buttonText='Создать' onSubmit={handleSubmit} isOpen={isOpen} closeAllPopups={onClose}>
            <input className="popup__input popup__input_type_title" id="input-title" name="input-title" type="text"
                   placeholder="Название" minLength="2" maxLength="30" value={name} onChange={handleNameChange} required/>
            <span className="popup__input-error input-title-error"></span>
            <input className="popup__input popup__input_type_link" value={link} onChange={handleLinkChange} id="input-link" name="input-link" type="url"
                   placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error input-link-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;