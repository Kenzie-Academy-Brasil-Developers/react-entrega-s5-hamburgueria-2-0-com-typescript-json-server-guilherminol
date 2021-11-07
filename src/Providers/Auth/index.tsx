import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useHistory } from "react-router";
import api from "../../Services/api";

interface SignInProps {
  email: string;
  password: string;
}
interface AuthProviderProps {
  children: ReactNode;
}
interface Product {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface AuthContextInterface {
  SignIn: (SignInProps: SignInProps) => void;
  Logout: () => void;
  authToken: string;
  products: Product[];
  cart: Product[];
  setProducts: Dispatch<SetStateAction<never[]>>;
  setCart: any;
  userId: number;
}
const AuthContext = createContext({} as AuthContextInterface);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || ""
  );
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(-1);

  const SignIn = (userData: SignInProps) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setAuthToken(response.data.accessToken);
        history.push("/dashboard");
        setUserId(response.data.user.id);
        api.get("/cart");
        setCart(response.data.user.cart);
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

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(authToken);
    const data = { cart: cart };
    api
      .patch(`/users/${userId}`, data, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cart]);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setProducts,
        Logout,
        SignIn,
        products,
        cart,
        setCart,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
