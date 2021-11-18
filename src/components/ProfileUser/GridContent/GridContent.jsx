import css from './styles.module.css'


const GridContent = ({ logo, firstName }) => {
    return (

        <div className={css.grid__contentBox}>
            <img className={css.grid__contentImg} src={logo} alt='ava' />
            <div className={css.grid__contentName}> {firstName}</div>
        </div>
    )
}

export { GridContent }