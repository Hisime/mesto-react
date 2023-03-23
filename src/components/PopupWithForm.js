function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container popup-wrapper">
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={`${props.name}-form`} noValidate>
                    {props.children}
                    <button className="popup__save" type="submit">{props.buttonText}</button>
                </form>
                <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.closeAllPopups}></button>
            </div>
        </div>
    )
}
export default PopupWithForm;