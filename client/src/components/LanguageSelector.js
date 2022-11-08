import React, { useContext, useEffect, useState } from "react";

import { languageOptions } from "../languages";
import { LanguageContext } from "../language";

export default function LanguageSelector() {
  // you get the provider that has userLanguage and userLanguageChange

  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const [langOpt, setLangOpt] = useState("");

  const handleClick = (e) => {
    document.querySelector(`#${langOpt}`).classList.remove("span-active");
    userLanguageChange(e.target.id);
    setLangOpt(e.target.id);
  };

  const selectedLangEl = document.getElementById(`${langOpt}`);
  selectedLangEl?.classList.add("span-active");

  useEffect(() => {
    setLangOpt(window.localStorage.getItem("lang-opt"));
  }, [langOpt]);
  // Object.entries() je kao array.forEach ali za objekte.
  return (
    <div className='language-selector' onClick={handleClick}>
      <span id='en' onClick={handleClick}>
        eng
      </span>
      |
      <span id='srp' onClick={handleClick}>
        srp
      </span>
    </div>
  );
}
