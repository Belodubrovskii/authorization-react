import React from 'react';
import {api} from '../utils/api.js'
import './UsersList.css';

export default function UsersList (props) {

  const [usersList, setUsersList] = React.useState([]);
  const [isFilterById, setFilterById] = React.useState(false);
  const [isFilterByName, setFilterByName] = React.useState(false);
  const [objList, setObjList] = React.useState([]);

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

    function sortById () {
 
      let filteredUsers = usersList.slice();

      filteredUsers.sort((a, b) => {
        return isFilterById ? a.key - b.key : b.key - a.key
      })
      setUsersList(filteredUsers);
    }

    sortById();

  },[isFilterById])


  React.useEffect(() => {

    function sortByName () {

      let filteredUsers = objList.slice();

      filteredUsers.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) 
          return isFilterByName ? 1 : -1
        if (nameA > nameB)
          return isFilterByName ? -1 : 1
        return 0 
      })
      setUsersList(filteredUsers.map((user) => (
        <tr key={user.id}>
          <td className="user-name">{user.name}</td>
          <td className="user-id">{user.id}</td>
        </tr>
      )))
    }

    sortByName();

  },[isFilterByName])

  function filterById () {
    setFilterById(!isFilterById);
  }

  function filterByName () {
    setFilterByName(!isFilterByName);
  }
  
  return (
    <>
     <h1 className="title">Welcome, {props.username}</h1>
     <button className="button-logout" onClick={props.logOut} type="button">Log out</button>
      <table>
        <tbody className="table">
          <tr>
            <td className="header-name">
              <button onClick={filterByName} className="filter-button" type="button">Username</button>
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