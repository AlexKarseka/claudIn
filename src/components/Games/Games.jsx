import css from './styles.module.css'

const Games = () => {
    return (
        <div className={css.games}>
            <div className={css.games__header}>
                <div className={css.games__headerTitle}>Мои игры</div>
            </div>
            <div className={css.games__wall}>
            </div>
        </div>
    )
}

export { Games }