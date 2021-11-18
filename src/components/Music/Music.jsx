import css from './styles.module.css'

const Music = () => {
    return (
        <div className={css.music}>
            <div className={css.music__header}>
                <div className={css.music__headerTitle}>Моя музыка</div>
            </div>
            <div className={css.music__wall}>
            </div>
        </div>
    )
}

export { Music }