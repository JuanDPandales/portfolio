import React, { useContext, useState } from 'react'
import { proyectos, habilidades, sobreMi } from '../../components'
import Brightness2Icon from '@mui/icons-material/Brightness2';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../contexts/themeswapper'
import './Navstyles.css'

const Navbar = () => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const [showNavList, setShowNavList] = useState(false)
    const toggleNavList = () => setShowNavList(!showNavList)
    return (
        <>
            <nav className='center nav'>
                <ul style={{ display: showNavList ? 'flex' : null }}
                    className='nav__list'>

                    {proyectos.length ? (
                        <li className='nav__list-item'>
                            <a href='#proyectos' onClick={toggleNavList} className='link link--nav'>Proyectos
                            </a>
                        </li>
                    ) : null}

                    {habilidades.length ? (
                        <li className='nav__list-item'>
                            <a href='#habilidades' oNClick={toggleNavList} className='link link--nav'>Habilidades</a>
                        </li>
                    ) : null}

                    {sobreMi.length ? (
                        <li className='nav__list-item'>
                            <a href='#sobre-mi' onClick={toggleNavList} className='link link--nav'>Sobre mi</a>
                        </li>
                    ) : null}

                    <button
                        type='button'
                        onClick={toggleTheme}
                        className='btn btn--icon nav__theme'
                        aria-label='toggle theme'>
                        {themeName === 'dark' ? <LightModeIcon /> : <Brightness2Icon />}

                    </button>

                    <button type='button'
                        onClick={toggleNavList}
                        className='btn btn--icon__hamburguer' aria-label='toggle navigation'>
                        {showNavList ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </ul>
            </nav>
        </>
    )
}

export default Navbar