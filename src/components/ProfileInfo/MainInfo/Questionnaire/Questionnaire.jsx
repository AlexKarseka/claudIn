import css from './styles.module.css'

const Questionnaire = ({ item, info }) => {
    return (
        <li className={css.questionnaire}>
            <div>{item}</div>  
            <div>{info}</div>
            </li>
    )
}

export { Questionnaire }