import { useLocalStorage } from './useLocalStorage';

import { useEffect } from 'react';


export const useDarkMode = _ => {

    const [ darkMode, setDarkMode ] = useLocalStorage('darkMode');

    let body = document.querySelector('body');

    useEffect(_ => {

        darkMode ? body.classList.add('darkMode') : body.classList.remove('darkMode');

    },[darkMode]);

    return [darkMode, setDarkMode];

}


