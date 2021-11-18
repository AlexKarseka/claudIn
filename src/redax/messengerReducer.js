const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    messengerUser: [
        { id: 1, name: 'Вася Васильев', avatar: 'https://www.blast.hk/attachments/64805/' },
        { id: 2, name: 'Петя Петров', avatar: 'https://www.blast.hk/attachments/68499/' },
        { id: 3, name: 'Галя Галева', avatar: 'https://cs13.pikabu.ru/post_img/big/2020/04/17/11/1587146536174888206.jpg' },
        { id: 4, name: 'Игорь Игорев', avatar: 'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg' },
        { id: 5, name: 'Алексей Алексеев', avatar: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg' },
        { id: 6, name: 'Иван', avatar: 'https://u.kanobu.ru/longreads/2014/12/31/2dde164a-f4b4-4fe4-b876-5b0ec8838125.jpg' },
        { id: 7, name: 'Сталина Петровна', avatar: 'https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_3.jpg' },
        { id: 8, name: 'Просто Здраствуй', avatar: 'https://vokrug.tv/pic/news/0/e/8/1/0e817fef2c3447132bcf1810940b6f9d.jpg' },
        { id: 9, name: 'SJ SJ', avatar: 'http://risovach.ru/thumb/upload/200s400/2013/03/generator/cj-iz-san-andreas_12785877_orig_.jpeg?ed1uf' },
        { id: 10, name: 'Валера Умный', avatar: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg' },
    ],
    messengerChat: [
        { id: 1, message: "Привет!" },
        { id: 2, message: "Пока!" },
        { id: 3, message: "Ну как ты?" },
        { id: 4, message: "Огогогооо!" },
        { id: 5, message: "Эхххх" },
        { id: 6, message: "Привет Товарищ!" }
    ],
    newMessageText: ''
}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMes = {
                id: state.messengerChat.length + 1,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messengerChat: [...state.messengerChat, newMes ]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default messengerReducer