import { createStore } from "redux";

const initialState = {
    dataBlog: [],
    name: "Dandi Saputra"
}

// sebuah function yang mengirimkan value yg sering disebut state global yang akan diterima store, dan menerima 2 parameter utama yaitu (state & action)
// state disini yang akan menjadi state global yang dimana valuenya adalah initial state
const reducer = (state = initialState, action) => {
    return state
}

const store = createStore(reducer);

export default store;