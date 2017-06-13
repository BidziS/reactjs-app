import * as types from './actionTypes';
import bookApi from '../api/bookApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';
import {throwError, exitError} from './onErrorAction';

export function loadBooksSuccess(books) {
    return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooksBySoldQuantitySuccess(books) {
    return { type: types.LOAD_BOOKS_BY_QUANTITY_SUCCESS, books };
}

export function createBookSuccess(book) {
    return {type: types.CREATE_BOOK_SUCCESS, book};
}

export function updateBookSuccess(book) {
    return {type: types.UPDATE_BOOK_SUCCESS, book};
}

export function deleteBookSuccess(bookId) {
    return {type: types.DELETE_BO0K_SUCCESS, bookId};
}


export function loadBooks() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.getAllBooks().then(books => {
            dispatch(loadBooksSuccess(books));
        }).catch(error => {
            throw (error);
        });
    };
}
export function loadAllBooksBySoldQuantity() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.getAllBooksBySoldQuantity().then(books => {
            dispatch(loadBooksBySoldQuantitySuccess(books));
        }).catch(error => {
            throw (error);
        });
    };
}
export function loadAllBooksSortedByNewest() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.getAllBooksBySoldQuantity().then(books => {
            dispatch(loadBooksBySoldQuantitySuccess(books));
        }).catch(error => {
            throw (error);
        });
    };
}
export function saveBook(book) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return bookApi.saveBook(book).then(savedBook => {
            book.id ? dispatch(updateBookSuccess(savedBook)) :
                dispatch(createBookSuccess(savedBook));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            dispatch(throwError(error));

            //throw(error);
        });
    };
}

export function deleteBook(bookId) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return bookApi.deleteBook(bookId).then(deletedBookId => {
            dispatch(deleteBookSuccess(deletedBookId));
        }).catch(error => {
            throw (error);
        });
    };
}
