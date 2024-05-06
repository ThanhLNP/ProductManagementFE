import axios from "axios";
import { BASE_API_URL, LOGIN_API, LOGOUT_API } from "constants";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (inputs: any) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const login = useCallback(async (inputs: any) => {
    const res = await axios.post(BASE_API_URL + LOGIN_API, inputs);
    setCurrentUser(res.data);
  }, []);

  const logout = useCallback(async () => {
    await axios.post(BASE_API_URL + LOGOUT_API);
    setCurrentUser(null);
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  const authContextValue = useMemo(
    () => ({ currentUser, login, logout }),
    [currentUser, login, logout]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
