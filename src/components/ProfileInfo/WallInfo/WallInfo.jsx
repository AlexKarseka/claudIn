import React from 'react';
import css from './styles.module.css'
import { Post } from './Post'
import { Button } from '../../common/Button/Button';


const WallInfo = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    console.log()
    return (
        <div>
            <div className={css.wall_info}>
                <textarea onChange={onPostChange}
                    ref={newPostElement}
                    value={props.profilePage.newPostText}
                    className={css.wall_infoArea}
                    placeholder="Что у Вас нового?" />
                <div className={css.wall_infoButton}>
                    <Button onClick={addPost} text='Отправить' />
                </div>
            </div>
            <div className={css.wall_infoPost}>
                <div className={css.wall_infoPostHeader}>
                    Ваши записи
                </div>
                {props.profilePage.profileWall
                    .map(m => <Post key={m.id} logo={m.logo} text={m.text} name={m.name} />)}
            </div>
        </div>
    )
}

export { WallInfo }