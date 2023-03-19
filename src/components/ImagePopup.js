function ImagePopup() {
    return (
        <div className="popup popup_type_photo">
            <div className="popup__image-container popup-wrapper">
                <img className="popup__image"
                     src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" alt="Байкал"/>
                <span className="popup__photo-name">Байкал</span>
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
            </div>
        </div>
    )
}