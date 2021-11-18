import css from './styles.module.css'

const Films = () => {
    return (
        <div className={css.movie}>
            <div className={css.movie__header}>
                <div className={css.movie__headerTitle}>Мои фильмы</div>
            </div>
            <div className={css.movie__wall}>
            </div>
        </div>
    )
}


export { Films }