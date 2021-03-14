let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 3},
            {id: 3, message: 'It\'s my second post', likesCount: 4},
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'How old are you?'},
            {id: 4, message: 'Hello'},
            {id: 5, message: 'YoYos'},
        ],
        dialogs: [
            {id: 1, name: 'Саша'},
            {id: 2, name: 'Дима'},
            {id: 3, name: 'Вася'},
            {id: 4, name: 'Виктор'},
            {id: 5, name: 'Валера'},
        ],
    },
}

export default state