import React, { useState, useContext, createContext } from "react";
import { languageOptions, dictionaryList } from "./languages";

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en, //maybe change it later to dictionaryList[en], jsut to see
});

export function LanguageProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem("lang-opt"); // pamtim language u local storidzu
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("lang-opt", newLanguage);
    },
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function Text({ text_id }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[text_id] || text_id;
}
