import PopupWithForm from "./PopupWithForm";
import {useState, useEffect, useContext} from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    // Подписка на контекст
    const currentUser = useContext(CurrentUserContext);

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);


    return (
        <PopupWithForm name={'edit'} title={'Редактировать профиль'} buttonText='Сохранить' isOpen={isOpen} closeAllPopups={onClose} onSubmit={handleSubmit}>
            <input className="popup__input popup__input_type_name" value={name} onChange={handleNameChange} id="input-name" name="input-name" type="text"
                   minLength="2" maxLength="40" placeholder="Имя" required/>
            <span className="popup__input-error input-name-error"></span>
            <input className="popup__input popup__input_type_job" value={description} onChange={handleDescriptionChange} id="input-job" name="input-job" type="text"
                   minLength="2" maxLength="200" placeholder="О себе" required/>
            <span className="popup__input-error input-job-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;