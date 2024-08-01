//standard way of creating a theme inside of React
import React, { createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext)

//creating a theme and setting it to the local storage 
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light' //searching for a theme, if no theme use light theme, and save to local storage
    )

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    //here we toggle between different themes for the button
    const toggleTheme = () => { //if on light go to dark, if on dark go to light
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    //encapsulates whole app inside the theme component
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

