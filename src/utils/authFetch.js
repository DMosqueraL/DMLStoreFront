import { Token } from "@/api";

export async function authFetch(url, params) {
  const tokenControl = new Token();
  const token = tokenControl.getToken();

  const logout = () => {
    tokenControl.removeToken();
    window.location.replace("/");
  };

  if (!token) {
    logout();
  } else {
    if (tokenControl.hasExpired(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        return error;
      }
    }
  }
}
