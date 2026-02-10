import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [tier, setTier] = useState("FREE");

  return (
    <UserContext.Provider value={{ tier, setTier }}>
      {children}
    </UserContext.Provider>
  );
}
