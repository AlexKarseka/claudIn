import css from './styles.module.css'


const User = ({logo, firstName, lastName, country, town, status}) => {
    return (
        <div className={css.user}>
            <img className={css.user__img}
                src={logo} alt="icon" />
            <div className={css.user__footer}>
                <div className={css.user__info}>
                    <div className={css.user__name}>{`${firstName} ${lastName}`}</div>
                    <div className={css.user__address}> {country}, {town}</div>
                </div>
                <div className={css.user__status}>{status}</div>
            </div>
        </div>
    )
}

export { User }