import React from 'react';
import PopupWithForm from './components/PopupWithForm'
import {api} from './utils/api.js';
import Header from './components/Header';
import UsersList from './components/UsersList';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {

  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [userNameValue, setUserNameValue] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [token, setToken] = React.useState('');
  const [isError, setError] = React.useState(false);

  React.useEffect(() => {
    setToken(localStorage.token);
    setUsername(localStorage.username);
  }, [])
  
  function logOut () {
    setToken('');
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }

  function handlePopupOnen () {
    setPopupOpen(!isPopupOpen);
    setUserNameValue('');
    setPassword('');
    setError(false);
  }

  function handleUserNameChange (evt) {
    setUserNameValue(evt.target.value)
  }

  function handlePasswordChange (evt) {
    setPassword(evt.target.value)
  }

  function authSubmit (evt) {
    evt.preventDefault();

    api.login({username: userNameValue, password: passwordValue})
      .then(res => {
        setToken(res.token);
        setPopupOpen(false);
        setError(false)
        localStorage.setItem("token", res.token)
        localStorage.setItem("username", userNameValue);
        setUsername(userNameValue);
      })
      .catch(() => setError(true));

  }


  return (
    <>
    <HashRouter basename="/">
      {token ? <Redirect to="/users"/> : <Redirect to="/"/>}
      <Switch>
      {!token &&
        <Route exact path="/">
          <>
          < Header handlePopupOnen={handlePopupOnen}/>
          <PopupWithForm 
            isOpen={isPopupOpen} 
            onClose={handlePopupOnen} 
            userChange={handleUserNameChange}
            passwordChange={handlePasswordChange}
            handleSubmit={authSubmit}
            username={userNameValue}
            password={passwordValue}
            error={isError}
          />  
          </>
        </Route> 
      }
      {token && 
        <Route path="/users">
          < UsersList username={username} token={token} logOut={logOut} />
        </Route>
      }
      </Switch>
    </HashRouter>
    </>
  );
}

export default App;
