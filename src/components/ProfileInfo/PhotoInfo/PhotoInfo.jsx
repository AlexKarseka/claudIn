import css from './styles.module.css'
import { InserterPhoto } from './InserterPhoto'


const PhotoInfo = (props) => {
    return (
        <div className={css.photo__info}>
        <div className={css.photo__infoHeader}>
            <div className={css.photo__infoTitle}>Мои фотографии</div>
            <div className={css.photo__infoNumber}>{props.profilePage.profilePhoto.length}</div>
        </div>
        <InserterPhoto state={props.profilePage.profilePhoto}/>
    </div>
    )
}

export { PhotoInfo }