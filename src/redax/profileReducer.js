const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    profilePhoto: [
        { id: 1, item: 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg' },
        { id: 2, item: 'https://klike.net/uploads/posts/2019-01/1547365376_1.jpg' },
        { id: 3, item: 'http://фриляндия.рф/wp-content/uploads/2019/12/44b27eefe19e6bc71548efdf3ee1a3ad.jpg' },
        { id: 4, item: 'https://sun9-24.userapi.com/impf/F6YMreb7zhNinpWSSVE-8KFmRi4BeEuNsmsyPA/fTAfqgBISgs.jpg?size=604x483&quality=96&sign=32b533d9d1aa4266e00ab762695ab1a8&type=album' },
        { id: 5, item: 'https://static-cse.canva.com/blob/194414/photo-1502082553048-f009c37129b9-e1583341920812.jpeg' },
        { id: 6, item: 'https://mobimg.b-cdn.net/v3/fetch/91/91e6d05dd40773292292bad5a75e75db.jpeg' },
        { id: 7, item: 'https://autoreview.ru/images/Article/1593/Article_159376_860_575.jpg' },
        { id: 8, item: 'https://auto.vercity.ru/img/magazine/old/30090.jpg' },
        { id: 9, item: 'https://www.avtovzglyad.ru/media/article/00_B9AkuG0.jpg.740x555_q85_box-314%2C0%2C1918%2C1200_crop_detail_upscale.jpg' },
        { id: 10, item: 'https://klike.net/uploads/posts/2019-05/medium/1559021804_2.jpg' },
        { id: 11, item: 'https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg' },
        { id: 12, item: 'https://img.gazeta.ru/files3/839/7947839/upload-shutterstock_109674992-pic905v-895x505-10385.jpg' },
    ],
    profileFriends: [
        { id: 1, logo: 'https://www.blast.hk/attachments/64805/', firstName: 'Вася', lastName: 'Васильев' },
        { id: 2, logo: 'https://www.blast.hk/attachments/68499/', firstName: 'Петя', lastName: 'Петров' },
        { id: 3, logo: 'https://cs13.pikabu.ru/post_img/big/2020/04/17/11/1587146536174888206.jpg', firstName: 'Галя', lastName: 'Галева' },
        { id: 4, logo: 'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg', firstName: 'Игорь', lastName: 'Игорев' },
        { id: 5, logo: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg', firstName: 'Алексей', lastName: 'Алексеев' },
        { id: 6, logo: 'https://u.kanobu.ru/longreads/2014/12/31/2dde164a-f4b4-4fe4-b876-5b0ec8838125.jpg', firstName: 'Иван', lastName: 'Иванов' },
        { id: 7, logo: 'https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_3.jpg', firstName: 'Сталина', lastName: 'Петровна' },
        { id: 8, logo: 'https://vokrug.tv/pic/news/0/e/8/1/0e817fef2c3447132bcf1810940b6f9d.jpg', firstName: 'Просто', lastName: 'Здраствуй' },
        { id: 9, logo: 'http://risovach.ru/thumb/upload/200s400/2013/03/generator/cj-iz-san-andreas_12785877_orig_.jpeg?ed1uf', firstName: 'SJ', lastName: 'SJ' },
        { id: 10, logo: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg', firstName: 'Валера', lastName: 'Умный' },
    ],
    profileFilms: [
        { id: 1, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450', name: 'Зеленая миля', kind: 'Драма' },
        { id: 2, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/300x450', name: 'Побег из шоушенка', kind: 'Драма' },
        { id: 3, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/300x450', name: 'Джентльмены', kind: 'Криминал' },
        { id: 4, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/300x450', name: 'Форрест Гамп', kind: 'Драма' },
        { id: 5, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60aa1abc-b754-4817-ad9c-0bcda427a12b/300x450', name: 'Король Лев', kind: 'Мультфильм' },
        { id: 6, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/1a170eea-da02-40c1-a750-91c59d56e1a6/300x450', name: 'Иван Васильевич меняет профессию', kind: 'Комедия' },
        { id: 7, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/300x450', name: 'Интерстеллар', kind: 'Фэнтези' },
        { id: 8, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/6e11a16e-c9e7-491f-9162-01098a7d8dd9/300x450', name: 'Тайна Коко', kind: 'Мультфильм' },
        { id: 9, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/300x450', name: 'Карты, деньги, два ствола', kind: 'Криминал' },
        { id: 10, logo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/300x450', name: '1+1', kind: 'Драма' },
    ],
    profileMusic: [
        { id: 1, logo: 'https://upload.wikimedia.org/wikipedia/ru/e/e8/Linkin_Park_%E2%80%94_Hybrid_Theory.jpg', name: 'Linkin Park', kind: 'Hybrid theory' },
        { id: 2, logo: 'https://upload.wikimedia.org/wikipedia/ru/e/e7/SOAD_Album_02.jpg', name: 'System of a Down', kind: 'Toxicity' },
        { id: 3, logo: 'https://upload.wikimedia.org/wikipedia/ru/4/40/Rammstein_Rosenrot.jpg', name: 'Rammstein', kind: 'Rosenrot' },
        { id: 4, logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/Californication.jpg/274px-Californication.jpg', name: 'Red Hot Chili Peppers', kind: 'Californication' },
        { id: 5, logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/%D0%A0%D0%BE%D0%B4%D0%BD%D1%8B_%D0%BA%D1%80%D0%B0%D0%B9.jpg/274px-%D0%A0%D0%BE%D0%B4%D0%BD%D1%8B_%D0%BA%D1%80%D0%B0%D0%B9.jpg', name: 'Brutto', kind: 'Родны край' },
        { id: 6, logo: 'https://doctorhead.ru/upload/resize_cache/iblock/565/676_560_1/R_1813006_1436814762_9681.jpeg.jpg', name: 'Nirvana', kind: 'Nevermind' },
        { id: 7, logo: 'https://upload.wikimedia.org/wikipedia/ru/a/a4/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D1%82%D1%80%D0%B5%D1%82%D1%8C%D0%B5%D0%B3%D0%BE_%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%D0%B0_Metallica.jpg', name: 'Metallica', kind: 'Master of Puppets' },
        { id: 8, logo: 'https://shop.bdva.ru/pictures/product/middle/4668_middle.png', name: 'Би-2', kind: 'Горизонт событий' },
        { id: 9, logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5b/Granatovy_albom_cover.jpg/274px-Granatovy_albom_cover.jpg', name: 'Сплин', kind: 'Гранатовый альбом' },
    ],
    profileGames: [
        { id: 1, logo: 'https://upload.wikimedia.org/wikipedia/ru/2/26/V_City-PS2.jpg', firstName: 'GTA VC' },
        { id: 2, logo: 'https://upload.wikimedia.org/wikipedia/ru/c/ce/Bc2lowres.jpg', firstName: 'Battlefield:BC2' },
        { id: 3, logo: 'https://upload.wikimedia.org/wikipedia/ru/0/03/Red_Dead_Redemption_2_coverart.jpg', firstName: 'Red Dead 2' },
        { id: 4, logo: 'https://upload.wikimedia.org/wikipedia/ru/d/d0/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Need_for_Speed_Underground_2.jpg', firstName: 'Underground2' },
        { id: 5, logo: 'https://igromagnit.org/uploads/posts/2019-07/1563306973_total-war-rome-2.jpg', firstName: 'Rome2' },
        { id: 6, logo: 'https://blayzer.uz/uploads/posts/2013-03/thumbs/1362604112_114379161.jpg', firstName: 'Lineage 2' },
        { id: 7, logo: 'https://upload.wikimedia.org/wikipedia/ru/7/75/Grand_Theft_Auto_San_Andreas.jpg', firstName: 'GTA:SA' },
        { id: 8, logo: 'https://cubiq.ru/wp-content/uploads/2019/08/Empire_Total_War_cover_art.jpg', firstName: 'Empire' },
        { id: 9, logo: 'https://upload.wikimedia.org/wikipedia/ru/b/bd/The_Last_of_Us_Cover.jpg', firstName: 'Last of Us' },
        { id: 10, logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/73/Romebox.jpg/274px-Romebox.jpg', firstName: 'Rome: Total War' },
    ],
    profileWall: [
        { id: 6, name: 'Просто Здраствуй', logo: 'https://vokrug.tv/pic/news/0/e/8/1/0e817fef2c3447132bcf1810940b6f9d.jpg', text: 'Просто здраствуй, просто как дела?' },
        { id: 5, name: 'Алексей Алексеев', logo: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg', text: 'Учимся работать с Redax' },
        { id: 4, name: 'Игорь Игорев', logo: 'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg', text: 'Учимся работать c React, узнаем что-то новое каждый день и стремимся к полному овладеванию всем и вся, это сообщение написанно что бы проверить как ведет себя большой текст' },
        { id: 3, name: 'Петя Петров', logo: 'https://www.blast.hk/attachments/68499/', text: 'И я' },
        { id: 2, name: 'Иван Иванов', logo: 'https://u.kanobu.ru/longreads/2014/12/31/2dde164a-f4b4-4fe4-b876-5b0ec8838125.jpg', text: 'Привет, я тебя поздравляю' },
        { id: 1, name: 'Алексей Карсека', logo: 'https://steamuserimages-a.akamaihd.net/ugc/793108229627733289/C9AAA61BD8D6BB5A4A04BE56C6BC3F408440BED5/', text: 'Я создал свою страницу в ClaudIn, круто!' },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.profileWall.length + 1,
                name: 'Алексей Карсека',
                logo: 'https://steamuserimages-a.akamaihd.net/ugc/793108229627733289/C9AAA61BD8D6BB5A4A04BE56C6BC3F408440BED5/',
                text: state.newPostText
            }
            return {
                ...state,
                newPostText: '',
                profileWall: [newPost, ...state.profileWall]
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer