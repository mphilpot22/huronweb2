import React, { createContext, useState  } from 'react'

// @ts-ignore
export const MblNavContext = createContext();

const NavBtnContextProvider = (props) => {
    
    const [dropdown, setDropdown] = useState(false)
    const [click, setClick] = useState(true)
    
    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    const toggleMenu = () => {
        let menu = document.getElementById('mbl-nav-menu');
        menu?.classList.toggle('nav-menu-active');
        setClick(!click);
        if(dropdown) {
            toggleDropdown();
        }
    }

    return (
        <MblNavContext.Provider value={{dropdown, click, toggleMenu, toggleDropdown}}>
            {props.children}
        </MblNavContext.Provider>
    )
}

export default NavBtnContextProvider