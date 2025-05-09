import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    // console.log(user);
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>;
    }

    if(user && user?.email){
        return children;
    }
    else{
        <Navigate to='/auth/login'></Navigate>
    }
}

export default PrivateRoute;