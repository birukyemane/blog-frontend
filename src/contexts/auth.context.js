import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ currentUser, setCurrentUser, children }) => {

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
