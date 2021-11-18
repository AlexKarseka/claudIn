import css from './styles.module.css'
import { Button } from '../common/Button'

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.header__left}>
                <div className={css.header__logo}>
                    Сloud
                    <span className={css.header__logoIn}>In</span>
                </div>
                <div className={css.header__search}>
                    <span></span>
                    <input className={css.header__searchInput} type="text" placeholder="Поиск" />
                </div>
            </div>
            <div className={css.header__exit}>
                <Button text='Выйти' />
            </div>
        </div>
    )
}

export { Header }