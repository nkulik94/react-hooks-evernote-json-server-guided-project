import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';

function CreateAccount( { users, onCreateAccount, handleError, displayError } ) {
    const [newUser, createNewUser] = useState({
        name: '',
        username: '',
        password: '',
    })

    function handleChange(e) {
        createNewUser({...newUser, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const takenUser = users.find(user => user.username === newUser.username)
        takenUser ?  handleError() : onCreateAccount(newUser)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Name</label>
                <input type="text" name="name" placeholder="Your name" value={newUser.name} onChange={handleChange} />
                <label htmlFor="username">Create a Username</label>
                <input type="text" name="username" placeholder='username' value={newUser.username} onChange={handleChange} />
                <label htmlFor="password">Create a Password</label>
                <input type="password" name='password' value={newUser.password} onChange={handleChange} />
                <input type="submit" value="Create Account" style={{textAlign: 'center'}} />
            </form>
            {displayError ? <Error error={'create-error'} /> : null}
            <p>Been here before? <Link to="/">Log in</Link></p>
        </>
    )
}

export default CreateAccount