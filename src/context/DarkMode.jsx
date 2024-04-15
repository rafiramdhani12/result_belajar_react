/* eslint-disable react/prop-types */

import {createContext, useState} from "react";

const DarkModeContext = createContext();

// redux menyediakan provider context tidak jadi harus buat sendiri

const DarkModeContextProvider = ({children}) => {
  const [isDarkmode, setIsDarkmode] = useState(false);
  return (
    <DarkModeContext.Provider value={{isDarkmode, setIsDarkmode}}>
      {children}
    </DarkModeContext.Provider>

    // value adalah state yg bisa diakses secara global
  );
};
export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
