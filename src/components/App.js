import React, { useState, useEffect } from "react";
import { Route, useHistory, Switch } from "react-router-dom"
import Header from "./Header";
import CreateAccount from "./CreateAccount";
import LoginForm from "./LoginForm";
import NoteContainer from "./NoteContainer";

function App() {
  const history = useHistory()
  const [allUsers, updateUsers] = useState([])
  const [userId, updateUserId] = useState('')
  const [displayError, changeErrorDisplay] = useState(false)


    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(users => updateUsers(users))
    }, [])

  function loginUser(id) {
    fetch(`http://localhost:3000/users/${id}`)
      .then(r => r.json())
      .then(u => {
        updateUserId(u.id)
        history.push(`/users/${u.id}`)
      })
  }

  function handleError() {
    changeErrorDisplay(true)
    setTimeout(() => changeErrorDisplay(false), 3000)
}

  function handleCreateAccount(user) {
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    }
    fetch('http://localhost:3000/users', config)
      .then(r => r.json())
      .then(u => {
        updateUserId(u.id)
        updateUsers([...allUsers, u])
        history.push(`/users/${u.id}`)
      })
  }

  return (
    <div className="app">
      <Header />
        <Switch>
            <Route exact path="/">
                <LoginForm users={allUsers} onLogin={loginUser} handleError={handleError} displayError={displayError} />
            </Route>
            <Route exact path="/create-account">
                <CreateAccount onCreateAccount={handleCreateAccount} users={allUsers} handleError={handleError} displayError={displayError} />
            </Route>
            <Route path="/users" >
                <NoteContainer id={userId} />
            </Route>
          </Switch>
    </div>
  );
}

export default App;
