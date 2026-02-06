import { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  name: string;
  pin: string;
}

interface UserContextType {
  users: User[];
  activeUser: User | null;
  setActiveUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users] = useState<User[]>([
    {
      name: "Tuana",
      pin: import.meta.env.VITE_TUANAS_PIN,
    },
    {
      name: "Kia",
      pin: import.meta.env.VITE_KIAS_PIN,
    },
  ]);

  const [activeUser, setActiveUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ users, activeUser, setActiveUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
