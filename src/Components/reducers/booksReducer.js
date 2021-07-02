"use strict"
// const reducer = function(state=0,action){
//     switch(action.type){
//         case "INCREMENT":
//             return state + action.payload
//         break;
//         case "DECREMENT":
//             return state - action.payload
//         break;
//     }
//     return state;
// }
const booksReducer = function (state = { books: 
    [
        {
            _id: 1,
            title: "this is the book title",
            description: "this is the book description",
            price: 33.33
        },
        {
            _id: 2,
            title: "this is the second book title",
            description: "this is the second book description",
            price: 50
        }
    ] 
}, action) {
    switch (action.type) {
        case "GET_BOOKS":
            return{
                books:[...state,...state.books]
            }
            break;
        case "POST_BOOK":
            // let books = state.books.concat(action.payload)
            // return {books};
            return { books: [...state.books, ...action.payload] }
            break;
        case "DELETE_BOOK":
            let currentBookToDelete = [...state.books];
            const indexToDelete = currentBookToDelete.findIndex((book) => {
                return book._id == action.payload._id;
            })
            return {
                ...state,
                books: [...currentBookToDelete.slice(0, indexToDelete)
                    , ...currentBookToDelete.slice(indexToDelete + 1)]
            }
            break;
        case "UPDATE_BOOK":
            const currentBookToUpdate = [...state.books];
            const indexToUpdate = currentBookToUpdate.findIndex((book) => {
                return book._id === action.payload._id;
            })
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }
            return {
                books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
            }
            break;
    }
    return state;
}

export default booksReducer;