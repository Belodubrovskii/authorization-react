import React from 'react';
import {api} from '../utils/api.js'
import './UsersList.css';

export default function UsersList (props) {

  const [usersList, setUsersList] = React.useState([]);
  const [sortAscending, setSortAscending] = React.useState(false);
  const [isSorted, setSorted] = React.useState(false);
  const [objList, setObjList] = React.useState([]);
  const [value, setValue] = React.useState('');

  function handleChange (evt) {
    setValue(evt.target.value)
  }

  React.useEffect(() => {
    api.users(props.token)
      .then(data => {

        setUsersList(data.map((user) => (
          <tr key={user.id}>
            <td className="user-name">{user.username}</td>
            <td className="user-id">{user.id}</td>
          </tr>
        )))

        setObjList(data.map((userData) => {
          return {name: userData.username,
                  id: userData.id}
        }))
      })
  },[])

  React.useEffect(() => {

    function filterByName () {

      const filteredUsers = objList.filter((item) => {

        let name = item.name.toLowerCase();
        let inputName = value.toLowerCase();

        if (name.indexOf(inputName) === 0) {
          return true
        } else {
          return false
        }
      })
      if (isSorted) {
        filteredUsers.sort((a, b) => {
          return sortAscending ? a.id - b.id : b.id - a.id
        })
      }

      setUsersList(filteredUsers.map((user) => (
        <tr key={user.id}>
          <td className="user-name">{user.name}</td>
          <td className="user-id">{user.id}</td>
        </tr>
      )))
    }

    filterByName();

  },[value])

  React.useEffect(() => {

    function sortById () {
      
      let filteredUsers = usersList.slice();
      filteredUsers.sort((a, b) => {
        return sortAscending ? a.key - b.key : b.key - a.key
      })
      setUsersList(filteredUsers);
    }

    sortById();

  },[sortAscending])


  function filterById () {
    setSortAscending(!sortAscending);
    setSorted(true);
  }

  return (
    <>
     <h1 className="title">Welcome, {props.username}</h1>
     <button className="button-logout" onClick={props.logOut} type="button">Log out</button>
      <table>
        <tbody className="table">
          <tr>
            <td className="header-name">
              <input className="unput-name" value={value} onChange={handleChange} placeholder="Username"></input>
            </td>
            <td className="header-id">
              <button onClick={filterById} className="filter-button" type="button">Id</button>
            </td>
          </tr>
          {usersList}
        </tbody>
      </table>
    </>
  ) 
}