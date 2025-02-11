import { createContext, useEffect, useState } from "react";
import { TypeUser } from "../types/types";
import { userMock } from "../mocks/userMock";

type TypeUserContext = {
  user: TypeUser | null;
  setUser: (user: TypeUser) => void;
};

export const UserContext = createContext<TypeUserContext>({
    user: null,
    setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TypeUser | null>(null);

  useEffect(() => {
    setUser(userMock);
  }, []);

  return (
    <UserContext.Provider value={{ 
        user,
        setUser
    }}>
      {children}
    </UserContext.Provider>
  );
};