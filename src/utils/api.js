 import {apiOptions} from './utils.js'

 class Api {
  constructor({apiOptions}) {
    this._baseUrl = apiOptions.baseUrl;
    this._headers = apiOptions.headers;
  }

  _handleResponse(res){
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.statusText)
    }
  }

  _handleResponseError(err){

    return Promise.reject(err.message)
  }

  login (userData) {
    return fetch(`${this._baseUrl}/api-token-auth/`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        username: userData.username,
        password: userData.password
      })
    })
    .then(this._handleResponse)
    .catch(this._handleResponseError);
  }

  users (token) {
    return fetch(`${this._baseUrl}/api/v1/users/`, {
      method: 'GET',
      headers: {...this._headers, Authorization: `Token ${token}`},
    })
    .then(this._handleResponse)
    .catch(this._handleResponseError);
  }

  // createUser (data) {
  //   return fetch(`${this._baseUrl}/api/v1/users/`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify(data)
  //   })
  //   .then(this._handleResponse)
  //   .catch(this._handleResponseError);
  // }
}

export const api = new Api({apiOptions});

