import css from './styles.module.css'
import { ProfileInfo } from '../ProfileInfo'
import { ProfileUserContainer } from '../ProfileUser/ProfileUserContainer'


const Profile = () => {
    return (
        <div className={css.profile}>
            <ProfileUserContainer />
            <ProfileInfo />
        </div>
    )
}

export { Profile }