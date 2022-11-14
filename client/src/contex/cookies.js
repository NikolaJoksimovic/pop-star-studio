import { createContext, useState } from "react";
import { useCookies } from "react-cookie";

export const CookieContex = createContext({
  desc: "Used to pass the cookies to pages when navigating.",
});

export function CookieProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [reload, setReload] = useState(false);

  const provider = {
    reload,
    setReload,
    cookies,
    setCookie,
    removeCookie,
  };

  return (
    <CookieContex.Provider value={provider}>{children}</CookieContex.Provider>
  );
}
