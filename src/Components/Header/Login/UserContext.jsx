import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    const userDataString = localStorage.getItem("userData");

    if (loggedInStatus === "true" && userDataString) {
      const userData = JSON.parse(userDataString);
      setIsLoggedIn(true);
      setUserData(userData.data);
    }
  }, []);

  const login = (data) => {
    setIsLoggedIn(true);
    setUserData(data);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
