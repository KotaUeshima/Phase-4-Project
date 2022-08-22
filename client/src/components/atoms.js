import { atom } from "recoil"

export const userState = atom ({
    key: 'userState',
    default: {
        username: '',
        id: ''
    }
})

export const loggedIn = atom({
    key: 'loggedIn',
    default: false
})
