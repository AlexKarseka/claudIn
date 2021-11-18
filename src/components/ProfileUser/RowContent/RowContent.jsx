import css from './styles.module.css'


const RowContent = ({ logo, name, kind }) => {
    return (
        <div className={css.row__contentBox}>
            <img className={css.row__contentImg} src={logo} alt='ava' />
            <div className={css.row__contentName}>
                <div className={css.row__contentName}>{name}</div>
                <div className={css.row__contentKind}>{kind}</div>
            </div>
        </div>
    )
}

export { RowContent }