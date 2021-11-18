import css from './styles.module.css'
import { NavLink } from 'react-router-dom'

const NavMenuItem = ({ way, icon, text }) => {
    return (
        <NavLink to={way}
            className={`${icon} ${css.menu__items}`}
            activeClassName={css.active}>{text}</NavLink>
    )
}

export { NavMenuItem }