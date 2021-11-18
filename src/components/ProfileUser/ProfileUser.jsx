import css from './styles.module.css'
import { UserInfo } from './UserInfo'
import { RowContent } from './RowContent'
import { GridContent } from './GridContent'
import { Button } from './../common/Button'


const ProfileUser = (props) => {
    return (
        <div className={css.profile__user}>
            <div className={css.profile__photoBox}>
                <img className={css.profile__photo}
                    src="https://steamuserimages-a.akamaihd.net/ugc/793108229627733289/C9AAA61BD8D6BB5A4A04BE56C6BC3F408440BED5/" alt="icon" />
                <div className={css.profile__button}>
                    <Button text='Редактировать профиль' />
                </div>
            </div>
            <UserInfo title='Друзья' number={props.profilePage.profileFriends.length}
                contentGrid={props.profilePage.profileFriends
                    .map(f => <GridContent key={f.id} logo={f.logo} firstName={f.firstName} />)} />
            <UserInfo title='Фильмы' number={props.profilePage.profileFilms.length}
                contentRow={props.profilePage.profileFilms
                    .map(f => <RowContent key={f.id} logo={f.logo} name={f.name} kind={f.kind} />)} />
            <UserInfo title='Музыка' number={props.profilePage.profileMusic.length}
                contentRow={props.profilePage.profileMusic
                    .map(m => <RowContent key={m.id} logo={m.logo} name={m.name} kind={m.kind} />)} />
            <UserInfo title='Игры' number={props.profilePage.profileGames.length}
                contentGrid={props.profilePage.profileGames
                    .map(g => <GridContent key={g.id} logo={g.logo} firstName={g.firstName} />)} />
        </div>
    )
}

export { ProfileUser }