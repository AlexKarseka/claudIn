import css from './styles.module.css'


const InserterPhoto = (props) => {
    return (
        <div className={css.inserter__photo}>
        {props.state.map(photo => <img key={photo.id}
        className={css.inserter__photoImg} src={photo.item} alt='icon'/>)}
        </div>
    )
}

export { InserterPhoto }