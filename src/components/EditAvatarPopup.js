import PopupWithForm from "./PopupWithForm";
import {useRef} from "react";

function EditAvatarPopup({onUpdateAvatar, isOpen, onClose}) {
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonText='Сохранить' onSubmit={handleSubmit} isOpen={isOpen} closeAllPopups={onClose}>
            <input ref={avatarRef} className="popup__input popup__input_type_link" id="avatar-link" name="avatar-link" type="url"
                   placeholder="Ссылка на аватар" required/>
            <span className="popup__input-error avatar-link-error"></span>
        </PopupWithForm>
    )
}
export default EditAvatarPopup;