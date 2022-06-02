import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginForm from './LoginForm';
import CreateAccount from './CreateAccount';
import NoteContainer from './NoteContainer';
import NavBar from './NavBar';

function Home( { onLogin } ) {
    const [allUsers, updateUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(users => updateUsers(users))
    }, [])

    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/login">
                    <LoginForm users={allUsers} onLogin={onLogin} />
                </Route>
                <Route exact path="/create-account">
                    <CreateAccount />
                </Route>
                <Route path="/users" >
                    <NoteContainer />
                </Route>
            </Switch>
        </>
    )
}

export default Home