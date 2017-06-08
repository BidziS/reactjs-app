import * as types from './actionTypes';
import bookApi from '../api/bookApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadBooksSuccess(books) {
    return { type: types.LOAD_BOOKS_SUCCESS, books };
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
