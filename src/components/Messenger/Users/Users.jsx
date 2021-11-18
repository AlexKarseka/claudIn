import css from './styles.module.css'
import { NavLink } from 'react-router-dom'

const Users = ({ id, name, avatar }) => {
    return (
        <NavLink to={`/messenger/${id}`} className={css.users} activeClassName={css.active}>
            <img className={css.avatar} src={avatar} alt='avatar'/>
            {name}
        </NavLink>
    )
}

export { Users }