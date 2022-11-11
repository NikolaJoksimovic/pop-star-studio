import React, { useContext, useEffect, useState } from "react";

import { LanguageContext } from "../contex/language";

export default function LanguageSelector() {
  // you get the provider that has userLanguage and userLanguageChange

  const { userLanguageChange } = useContext(LanguageContext);
  const [langOpt, setLangOpt] = useState("");

  const handleClick = (e) => {
    const targetId = e.target.id;
    setLangOpt(targetId);
    userLanguageChange(targetId);
    if (targetId !== langOpt) {
      document.querySelector(`#${langOpt}`).classList.remove("span-active");
    }
  };

  const selectedLangEl = document.getElementById(`${langOpt}`);
  selectedLangEl?.classList.add("span-active");

  useEffect(() => {
    setLangOpt(window.localStorage.getItem("lang-opt"));
  }, [langOpt]);

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
