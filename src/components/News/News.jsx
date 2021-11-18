import css from './styles.module.css'

const News = () => {
    return (
        <div className={css.news}>
            <div className={css.news__wrapper}>
                <div className={css.news__box}>
                    <div className={css.news__header}>
                        <textarea placeholder="Что у Вас нового?"></textarea>
                        <div className={css.news__headerUser}>Мои новости</div>
                    </div>
                    <div className={css.news__wall}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { News }