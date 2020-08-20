import React from 'react';

export default function UserCreate (props) {
  
  return (
    <form className="profile-form"> 
      <h2 className="form-title">Регистрация</h2>
      <label className="label" for="login"></label>
      <input onChange={props.handleChange} className="input" title="login" type="text" name="username" placeholder="Придумайте логин" required></input>
      <label className="label" for="first-name"></label>
      <input onChange={props.handleChange} className="input" title="first-name" type="text" name="first_name" placeholder="Имя"></input>
      <label className="label" for="last-name"></label>
      <input onChange={props.handleChange} className="input" title="last-name" type="text" name="last_name" placeholder="Фамилия"></input>
      <label className="label" for="psw"></label>
      <input onChange={props.handleChange} className="input" title="psw" type="password" name="password" placeholder="Придумайте пароль" required></input>
      <input className="button" value="Зарегистрироваться" type="submit"></input>
    </form>
  ) 
}