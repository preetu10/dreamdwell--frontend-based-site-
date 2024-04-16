import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup
} from "firebase/auth";
import auth from "../firebase/firebase.config"

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>unSubscribe();
  },[])

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }
  const signInWithGithub=()=>{
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
   
}

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const info = {
    user,
    createUser,
    signInUser,
    logout,
    loading,
    signInWithGoogle,
    signInWithGithub
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
