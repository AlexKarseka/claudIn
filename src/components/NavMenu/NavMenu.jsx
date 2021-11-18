import css from './styles.module.css'
import { NavMenuItem } from './NavMenuItem/NavMenuItem'


const NavMenu = () => {
    return (
        <div className={css.nav__menu}>
            <nav className={css.nav__menuWrapper}>
                <ul className={css.nav__menuItems}>
                    <NavMenuItem way='/profile' icon='icon-home2' text='Моя страница'/>
                    <NavMenuItem way='/news' icon='icon-newspaper' text='Новости'/>
                    <NavMenuItem way='/messenger' icon='icon-bubbles2' text='Мессенджер'/>
                    <NavMenuItem way='/friends' icon='icon-users' text='Друзья'/>
                    <NavMenuItem way='/photo' icon='icon-camera' text='Фотографии'/>
                    <NavMenuItem way='/music' icon='icon-music' text='Музыка'/>
                    <NavMenuItem way='/films' icon='icon-video-camera' text='Фильмы'/>
                    <NavMenuItem way='/games' icon='icon-dice' text='Игры'/>
                </ul>
            </nav>
        </div>
    )
}

export { NavMenu }