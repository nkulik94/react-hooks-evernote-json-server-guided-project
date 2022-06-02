import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Error from './Error';

function LoginForm( { users, onLogin, handleError, displayError } ) {
    const [loginInfo, updateLogin] = useState({
        username: '',
        password: ''
    })

    function handleChange(e) {
        updateLogin({...loginInfo, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const rightUser = users.find(user => user.username === loginInfo.username && user.password === loginInfo.password)
        rightUser ? onLogin(rightUser.id) : handleError()
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder='username' value={loginInfo.username} onChange={handleChange} />
            <input type="password" name="password" placeholder='enter password' value={loginInfo.password} onChange={handleChange} />
            <input type='submit' value="Log in" />
        </form>
        {displayError ? <Error error={'login-error'} /> : null}
        <p>
            New user? <Link to="/create-account">Create a new account</Link>
        </p>
        </>
    )
}

export default LoginForm