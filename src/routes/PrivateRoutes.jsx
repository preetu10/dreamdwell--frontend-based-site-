import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateRoutes = ({children}) => {
const {user,loading} =useContext(AuthContext);

// console.log(user,loading);
if(user){
    return children;
}
if(loading){
    return (
    <div className='text-center'>
    <span className="loading loading-spinner loading-lg"></span>
    </div>
    )
}
    return <Navigate to="/login"></Navigate>
};
PrivateRoutes.propTypes={
    children:PropTypes.node,
}
export default PrivateRoutes;