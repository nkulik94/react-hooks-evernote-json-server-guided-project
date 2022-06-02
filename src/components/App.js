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

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(users => updateUsers(users))
    }, [])

  function loginUser(id) {
    fetch(`http://localhost:3000/users/${id}`)
      .then(r => r.json())
      .then(user => {
        updateUserId(user.id)
        history.push(`/users/${user.id}`)
      })
  }

  return (
    <div className="app">
      <Header />
        <Switch>
            <Route exact path="/">
                <LoginForm users={allUsers} onLogin={loginUser} />
            </Route>
            <Route exact path="/create-account">
                <CreateAccount />
            </Route>
            <Route path="/users" >
                <NoteContainer id={userId} />
            </Route>
          </Switch>
    </div>
  );
}

export default App;
