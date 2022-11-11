import { createContext } from "react";
import { useCookies } from "react-cookie";

export const CookieContex = createContext({
  desc: "Used to pass the cookies to pages when navigating.",
});

export function CookieProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const provider = {
    cookies,
    setCookie,
    removeCookie,
  };

  return (
    <CookieContex.Provider value={provider}>{children}</CookieContex.Provider>
  );
}
