import { combineReducers } from 'redux';
import books from './booksReducer';
import words from './languageReducer';
import users from './userReducer';
import currentUser from './loginReducer';
import ajaxcall from './ajaxStatusReducer';
import categories from './categoryReducer';

const rootReducer = combineReducers({
    books,
    words,
    users,
    currentUser,
    ajaxcall,
    categories
});

export default rootReducer;
