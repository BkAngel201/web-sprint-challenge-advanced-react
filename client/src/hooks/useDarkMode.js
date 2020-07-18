import React from 'react';
import { useLocalStorage } from './useLocalStorage'



export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dMode', false)

    const bodyElement = document.querySelector('body')
    if(darkMode === false) {
        bodyElement.classList.remove("dark-mode")
    } else {
        bodyElement.classList.add("dark-mode")
    }
    
    return [darkMode, setDarkMode]

}