import css from './styles.module.css'
import { FriendCard } from './FriendCard'
import { Button } from '../common/Button'
import { NavLink } from 'react-router-dom'


const Friends = (props) => {
    return (
        <div className={css.friends}>
            <div className={css.friends__header}>
                <div className={css.friends__headerTitle}>Мои друзья</div>
                <NavLink to='/allUsers'>
                    <Button text='Все пользователи' />
                </NavLink>
            </div>
            {props.friendsPage.friendsList.map(f => <FriendCard key={f.id} id={f.id}
                firstName={f.firstName} lastName={f.lastName} logo={f.logo} />)}
        </div>
    )
}

export { Friends }