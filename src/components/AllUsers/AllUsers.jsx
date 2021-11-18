import css from './styles.module.css'
import { User } from './User/User'


const AllUsers = (props) => {
    return (
        <div className={css.allUsers}>
            <div className={css.allUsers__header}>
                <div className={css.allUsers__headerTitle}>Все пользователи</div>
            </div>
            <div className={css.allUsers__wall}>
                {props.allUsersPage.allUsersList
                    .map(user => <User key={user.id} logo={user.logo} 
                        firstName={user.firstName} lastName={user.lastName} 
                        country={user.country} town={user.town} 
                        status={user.status ? 
                        <button onClick={ () => {props.unFollow(user.id)}}>✅</button> : 
                        <button onClick={ () => {props.follow(user.id)}}>🚫</button>} 
                        />)}
            </div>
        </div>
    )
}

export { AllUsers }