import React, { createContext, useState } from 'react';

// Create the context
const UserAuthContext = createContext();

// The AuthContext component will provide the context value
const AuthContext = ({ children }) => {
  const [userLogin, setUserLogin] = useState(null); // Initialize as null, which means no user is logged in

  const login = (user) => {
    // Set user information when logging in
    setUserLogin(user); // `user` is the user data that you want to store when logging in
  };

  const logout = () => {
    // Reset the userLogin state to null when logging out
    setUserLogin(null);
  };

  return (
    <UserAuthContext.Provider value={{ userLogin, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export { UserAuthContext, AuthContext };
