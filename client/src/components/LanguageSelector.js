import React, { useContext } from "react";

import { languageOptions } from "../languages";
import { LanguageContext } from "../language";

export default function LanguageSelector() {
  // you get the provider that has userLanguage and userLanguageChange
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  // Object.entries() je kao array.forEach ali za objekte.
  return (
    <select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
