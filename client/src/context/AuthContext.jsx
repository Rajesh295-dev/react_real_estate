// import { createContext, useEffect, useState } from "react";
// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   const updateUser = (data) => {
//     setCurrentUser(data);
//   };

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, updateUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    if (currentUser) {
      console.log("Saving user to localStorage:", currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user"); // Clean up if user logs out
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
