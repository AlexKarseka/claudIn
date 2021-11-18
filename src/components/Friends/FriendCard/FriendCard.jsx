import css from './styles.module.css'
import { Button } from './../../common/Button'
import { NavLink } from 'react-router-dom'


const FriendCard = ({id, firstName, lastName, logo}) => {
    return (
        <div className={css.friend__card}>
        <img className={css.card__img} src={logo} alt="logo" />
        <div className={css.friend__cardInfo} >
            <div className={css.card__text}>
                <div className={css.text__name}>{firstName}</div>
                <div className={css.text__surname}>{lastName}</div>
            </div>
            <NavLink to={`/messenger/${id}`}>
                <Button text='Написать сообщение' />
            </NavLink>
        </div>
    </div>
    )
}

export { FriendCard }