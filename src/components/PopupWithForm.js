import React from 'react';

function PopupWithForm (props) {
  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
    <form onSubmit={props.handleSubmit} className="popup__form">
      <h4 className="popup__title">Sing In</h4>
      <span className={`popup__error ${props.error ? 'popup__error_visible' : ''}`}>Incorrect login or password!</span>
      <input value={props.username} onChange={props.userChange} className="popup__input popup__form-name" type="text" placeholder="Username" required minLength="1"></input>
      <input value={props.password} onChange={props.passwordChange} className="popup__input popup__form-name" type="password" placeholder="Passsword" required minLength="1"></input>
      <input className="popup__button" type="submit" value="Sign In"/>
      <button onClick={props.onClose} className="popup__close-button" type="button" />
    </form>
  </section>
  );
}

export default PopupWithForm;
