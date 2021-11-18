import css from './styles.module.css'


const UserInfo = ({ title, number, contentGrid, contentRow }) => {
    return (
        <div className={css.user__info}>
            <div className={css.user__infoHeader}>
                <div className={css.user__infoHeaderTitle}>{title}</div>
                <div className={css.user__infoHeaderNumber}>{number}</div>
            </div>
            <div className={css.grid__content}>
                {contentGrid}
            </div>
            {contentRow}
        </div>
    )
}

export { UserInfo }