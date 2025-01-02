// import { createContext, useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { AuthContext } from "./AuthContext";
// export const SocketContext = createContext();

// export const SocketContextProvider = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     setSocket(io("http://localhost:4000"));
//   }, []);

//   useEffect(() => {
//     currentUser && socket?.emit("newUser", currentUser.id);
//   }, [currentUser, socket]);

//   return (
//     <SocketContext.Provider value={{ socket }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize the socket
    const newSocket = io("http://localhost:4000", {
      reconnection: true, // Allow reconnection attempts
      reconnectionAttempts: 5, // Limit reconnection attempts
      timeout: 10000, // Connection timeout
    });

    // Listen for connection errors
    newSocket.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
      newSocket.disconnect(); // Gracefully stop further attempts
    });

    // Listen for disconnection
    newSocket.on("disconnect", () => {
      console.warn("Socket disconnected.");
    });

    // Set the socket instance
    setSocket(newSocket);

    // Clean up on unmount
    return () => {
      newSocket.disconnect();
      newSocket.off();
    };
  }, []);

  useEffect(() => {
    // Emit the "newUser" event only if the socket is connected
    if (currentUser && socket?.connected) {
      socket.emit("newUser", currentUser.id);
    }
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
