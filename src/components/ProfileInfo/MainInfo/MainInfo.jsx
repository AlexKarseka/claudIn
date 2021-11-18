import css from './styles.module.css'
import { Questionnaire } from './Questionnaire'


const MainInfo = ({ name, status }) => {
    return (
        <div className={css.main__info}>
            <div className={css.main__infoHeader}>
                <div className={css.main__infoName}>{name}</div>
                <div className={css.main__infoStatus}>{status}</div>
            </div>
            <ul className={css.main__infoData}>
                <Questionnaire item='Дата Рождения:' info='21 февраля 1993' />
                <Questionnaire item='Страна:' info='Беларусь' />
                <Questionnaire item='Город:' info='Минск' />
                <Questionnaire item='Образование:' info='БГУ' />
            </ul>
        </div>
    )
}

export { MainInfo }