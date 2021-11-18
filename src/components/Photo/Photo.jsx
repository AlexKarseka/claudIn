import css from './styles.module.css'

const Photo = () => {
    return (
        <div className={css.photo}>
            <div className={css.photo__header}>
                <div className={css.photo__headerTitle}>Мои фотографии</div>
            </div>
            <div className={css.photo__wall}>
            </div>
        </div>
    )
}

export { Photo }