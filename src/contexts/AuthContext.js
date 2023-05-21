import { useState, createContext, useEffect } from "react";
import { Token, User } from "@/api";

const tokenControl = new Token();
const userControl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenControl.getToken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenControl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token) => {
    try {
      //Token en el LocalStorage
      tokenControl.setToken(token);
      // Obtener datos del usuario
      const response = await userControl.getMe();
      // Setear los datos del usuario en el state user
      setUser(response);
      //Setear el token en el state token
      setToken(token);
      //Hacer un setLoading = false
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = () => {
    tokenControl.removeToken();
    setToken(null);
    setUser(null);
  };

  const data = {
    accessToken: null,
    user,
    login,
    logout,
    updateUser: null,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
