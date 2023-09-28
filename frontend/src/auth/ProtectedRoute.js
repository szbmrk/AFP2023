import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        const username = sessionStorage.getItem('username');
        const email = sessionStorage.getItem('email');
        if (!userId || !username || !email) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        const username = sessionStorage.getItem('username');
        const email = sessionStorage.getItem('email');
        if (!userId || !username || !email) {
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [sessionStorage.getItem('userId')]);

    return children;
};

export default ProtectedRoute;