import React from 'react';
import Navigate from 'react-router-dom';
import jwt_decode from 'jwt-decode';


const ProtectedRoute = ({ element: Component }) => {

    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
        return <Navigate to="/" />
    }

    try {
        const decodedToken = jwt_decode(accessToken);
        const time = Date.now() / 1000;
        if (decodedToken.exp < time) {
            sessionStorage.removeItem('accessToken');
            return <Navigate to="/" />
        }
    } catch (error) {
        console.log("Invalid token or decoding error ", error);
        sessionStorage.removeItem('accesstToken');
        return <Navigate to="/" />
    }

    return (
        <div><Component /></div>
    )
}

export default ProtectedRoute;