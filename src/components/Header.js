import React from 'react';

export default function Header (props) {
  
  return (
    <section className="login">
      <div className="header">
        <h1 className="header__title">Welcome</h1>
        <button onClick={props.handlePopupOnen} className="header__button" type="button">Sign In</button>
      </div>
    </section>
  ) 
}