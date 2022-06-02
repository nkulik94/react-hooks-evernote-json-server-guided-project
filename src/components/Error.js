import React from 'react';

function Error( { error } ) {
    return error === 'login-error' ? <p>We're sorry, the username and password do not match our records</p> : <p>That username already exists</p>
}

export default Error