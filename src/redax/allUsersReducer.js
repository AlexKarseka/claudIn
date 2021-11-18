const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
    allUsersList: [
        { id: '1', logo: 'https://www.blast.hk/attachments/64805/', firstName: 'Вася', lastName: 'Васильев', country: 'Беларусь', town: 'Минск', status: true },
        { id: '2', logo: 'https://www.blast.hk/attachments/68499/', firstName: 'Петя', lastName: 'Петров', country: 'Украина', town: 'Киев', status: true },
        { id: '3', logo: 'https://cs13.pikabu.ru/post_img/big/2020/04/17/11/1587146536174888206.jpg', firstName: 'Галя', lastName: 'Галева', country: 'Франция', town: 'Парыж', status: true },
        { id: '4', logo: 'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg', firstName: 'Игорь', lastName: 'Игорев', country: 'Беларусь', town: 'Минск', status: true },
        { id: '5', logo: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg', firstName: 'Алексей', lastName: 'Алексеев', country: 'Израэль', town: 'Иерусалим', status: true },
        { id: '6', logo: 'https://u.kanobu.ru/longreads/2014/12/31/2dde164a-f4b4-4fe4-b876-5b0ec8838125.jpg', firstName: 'Иван', lastName: 'Иванов', country: 'Рассия', town: 'Саратов', status: true },
        { id: '7', logo: 'https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_3.jpg', firstName: 'Сталина', lastName: 'Петровна', country: 'Беларусь', town: 'Минск', status: true },
        { id: '8', logo: 'https://vokrug.tv/pic/news/0/e/8/1/0e817fef2c3447132bcf1810940b6f9d.jpg', firstName: 'Просто', lastName: 'Здраствуй', country: 'Беларусь', town: 'Минск', status: true },
        { id: '9', logo: 'http://risovach.ru/thumb/upload/200s400/2013/03/generator/cj-iz-san-andreas_12785877_orig_.jpeg?ed1uf', firstName: 'SJ', lastName: 'SJ', country: 'Беларусь', town: 'Минск', status: true },
        { id: '10', logo: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg', firstName: 'Валера', lastName: 'Умный', country: 'Беларусь', town: 'Минск', status: true },
        { id: '11', logo: 'https://pbs.twimg.com/profile_images/1090578778580025344/F3d03Z4D.jpg', firstName: 'Король-чародей', lastName: 'Ангмара', country: 'Ангмар', town: 'Ангмар', status: false },
        { id: '12', logo: 'https://www.mirf.ru/wp-content/uploads/2013/05/tumblr_lp4qtvwQ2l1r0c0i9o1_12801.jpg', firstName: 'Арагорн', lastName: 'сынАраторна', country: 'Гондор', town: 'Белый город', status: false },
        { id: '13', logo: 'https://pbs.twimg.com/profile_images/484467039302463488/gYVEddcE.jpeg', firstName: 'Леголас', lastName: 'Леголас', country: 'Беларусь', town: 'Пинск', status: false },
        { id: '14', logo: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkX-B44YuC88qVqdikwYSyWqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288', firstName: 'Гимли', lastName: 'сынГлойна', country: 'Эриборн', town: 'Гора', status: false },
        { id: '15', logo: 'https://vgtimes.ru/uploads/posts/2020-06/67229_1_1.jpg', firstName: 'Боромир', lastName: 'сынГондора', country: 'Гондор', town: 'Гондор', status: false },
        { id: '16', logo: 'https://img0.liveinternet.ru/images/attach/c/0/32/729/32729600_image_1148330570.jpg', firstName: 'Сурумян', lastName: 'Белый', country: 'Изингард', town: 'Изингард', status: false },
        { id: '17', logo: 'https://staticlb.rmr.rocks/uploads/pics/02/05/217.jpg', firstName: 'Гендальф', lastName: 'Гендальф', country: 'Валинор', town: 'Валинор', status: false },
        { id: '18', logo: 'https://www.soyuz.ru/public/uploads/files/2/7442148/2020071012030153ea07b13d.jpg', firstName: 'Фродо', lastName: 'Бэггинс', country: 'Шир', town: 'Хоббитон', status: false },
        { id: '19', logo: 'https://upload.wikimedia.org/wikipedia/ru/2/25/Samwise_397139.jpg', firstName: 'Сэмуайз', lastName: 'Гэмджи', country: 'Шир', town: 'Хоббитон', status: false },
        { id: '20', logo: 'https://upload.wikimedia.org/wikipedia/ru/c/c2/Bilbo_B.jpg', firstName: 'Бильбо', lastName: 'Бэггинс', country: 'Шир', town: 'Хоббитон', status: false },
        { id: '21', logo: 'https://www.zarubejom.ru/wp-content/uploads/2016/08/the-eye-of-sauron_3133429b.jpg', firstName: 'Саурон', lastName: 'Саурон', country: 'Барад-Дур', town: 'Барад-Дур', status: false },
        { id: '22', logo: 'https://www.agroxxi.ru/images/photos/medium/article84723.jpg', firstName: 'Голум', lastName: 'Голум', country: 'Горы', town: 'Горы', status: false },
    ]
}

const allUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                allUsersList: state.allUsersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, status: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                allUsersList: state.allUsersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, status: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                allUsersList: [ ...state.allUsersList, ...action.allUsersList]
            }
        default:
            return state
    }
}

export const followCreator = (userId) => ({ type: FOLLOW, userId })
export const unFollowCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersCreator = (users) => ({ type: SET_USERS, users })

export default allUsersReducer

