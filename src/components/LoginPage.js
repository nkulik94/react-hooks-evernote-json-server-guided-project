import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginForm from './LoginForm';
import CreateAccount from './CreateAccount';

function LoginPage( {onLogin} ) {
    const [allUsers, updateUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(users => updateUsers(users))
    }, [])

    return (
        <Switch>
            <Route path="/login">
                <LoginForm users={allUsers} onLogin={onLogin} />
            </Route>
            <Route path="/create-account">
                <CreateAccount />
            </Route>
        </Switch>
    )
}

export default LoginPage