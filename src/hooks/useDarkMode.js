import { useLocalStorage } from './useLocalStorage';

import { useEffect } from 'react';


export const useDarkMode = _ => {

    const [ darkMode, setDarkMode ] = useLocalStorage('darkMode');

    let body = document.querySelector('body');

    useEffect(_ => {

        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');

    },[darkMode]);

    return [darkMode, setDarkMode];

}


