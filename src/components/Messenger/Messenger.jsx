import css from './styles.module.css'
import { Users } from './Users'
import { Chat } from './Chat'
import { Button } from '../common/Button/Button'


const Messenger = (props) => {

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }
    
    return (
        <div className={css.messenger}>
            <div className={css.messenger__header}>
                <div className={css.messenger__headerName}>Мессенджер</div>
            </div>
            <div className={css.messenger__wall}>
                <div className={css.messenger__wallUsers}>
                    {props.messengerPage.messengerUser
                        .map(user => <Users key={user.id} id={user.id} name={user.name} 
                        avatar={user.avatar} />)}
                </div>
                <div className={css.messenger__wallChat}>
                    {props.messengerPage.messengerChat
                        .map(mes => <Chat key={mes.id} message={mes.message} />)}
                    <div className={css.messenger__wallRuler}>
                        <textarea className={css.messenger__wallArea}
                            placeholder='Напишите сообщение...'
                            value={props.messengerPage.newMessageText}
                            onChange={onMessageChange} />
                        <Button className={css.messenger__wallButton}
                            onClick={addMessage}
                            text='>>>>'></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Messenger }