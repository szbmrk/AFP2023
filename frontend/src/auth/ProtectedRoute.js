import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        const email = sessionStorage.getItem('email');
        if (!username || !email) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        const email = sessionStorage.getItem('email');
        if (!username || !email) {
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [sessionStorage.getItem('token')]);

    return children;
};

export default ProtectedRoute;