import languageApi from '../api/mockLanguageApi';

export default {
    books: [],
    words: languageApi.getInitialState(),
    users: [],
    categories: [],
    currentUser: {},
    ajaxCallsInProgress: 0
};