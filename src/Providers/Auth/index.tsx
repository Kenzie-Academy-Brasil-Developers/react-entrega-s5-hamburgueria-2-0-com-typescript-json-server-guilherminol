import { useContext, useState, createContext, ReactNode } from "react";
import { useHistory } from "react-router";
import api from "../../Services/api";

interface SignInProps {
  email: string;
  password: string;
}
interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextInterface {
  SignIn: (SignInProps: SignInProps) => void;
  Logout: () => void;
  authToken: string;
}
const AuthContext = createContext({} as AuthContextInterface);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || ""
  );

  const SignIn = (userData: SignInProps) => {
    api
      .post("/users", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, SignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
