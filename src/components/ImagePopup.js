function ImagePopup(props) {
    return (
        <div className="popup popup_type_photo">
            <div className="popup__image-container popup-wrapper">
                <img className="popup__image"
                     src={props.card.link} alt={props.card.name}/>
                <span className="popup__photo-name">{props.card.name}</span>
                <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.closeAllPopups}></button>
            </div>
        </div>
    )
}

export default ImagePopup;