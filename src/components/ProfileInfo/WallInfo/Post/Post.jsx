import css from './styles.module.css'


const Post = ({ text, logo, name }) => {
    return (
        <div className={css.post}>
            <img className={css.post__avatar} src={logo} alt='ava' />
            <div className={css.post__info}>
                <div className={css.post__name}>{name}</div>
                <div className={css.post__text}>{text}</div>
            </div>
        </div>
    )
}

export { Post }