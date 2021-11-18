import css from './styles.module.css'

const Chat = ({message}) => {
    return (
        <div className={css.chat}>{message}</div>
    )
}

export { Chat }