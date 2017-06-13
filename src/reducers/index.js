import { combineReducers } from 'redux';
import books from './booksReducer';
import words from './languageReducer';
import users from './userReducer';
import currentUser from './loginReducer';
import ajaxcall from './ajaxStatusReducer';
import categories from './categoryReducer';
import carriers from './carrierReducer';
import covers from './coverReducer';
import countries from './countryReducer';
import authors from './authorReducer';
import errorInformation from './onErrorReducer';

const rootReducer = combineReducers({
    books,
    words,
    users,
    currentUser,
    ajaxcall,
    categories,
    carriers,
    covers,
    countries,
    authors,
    errorInformation
});

export default rootReducer;
