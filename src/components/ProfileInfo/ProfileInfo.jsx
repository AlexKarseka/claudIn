import css from './styles.module.css'
import { MainInfo } from './MainInfo'
import { PhotoInfoContainer } from './PhotoInfo/PhotoInfoContainer'
import { WallInfoContainer } from './WallInfo/WallInfoContainer'


const ProfileInfo = () => {
    return (
        <div className={css.profile__info}>
            <MainInfo name='Алексей Карсека' status='В работе' />
            <PhotoInfoContainer />
            <WallInfoContainer />
        </div>
    )
}

export { ProfileInfo }