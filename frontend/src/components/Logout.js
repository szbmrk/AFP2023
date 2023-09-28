import React, { useEffect } from 'react'

export default function Logout() {

    useEffect(() => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('email');
        window.location.href = '/login';
    }, []);
    return (
        <div>

        </div>
    )
}
