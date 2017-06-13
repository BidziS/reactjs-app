import delay from './delay';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const books = [
    {
        id: 1,
        title: 'Wiedźmin. Czas pogardy.',
        authorId: 1,
        isbn: 'jakis-tam',
        categoryId: 1,
        carrierId: 1,
        coverId: 1,
        price: 17,
        cover: 'https://naekranie.pl/wp-content/uploads/2014/12/czas_pogardy_nowa_edycja_large-1413970597.jpg',
        soldQuantity: 4
    },
    {
        id: 2,
        title: 'Wiedźmin. Czas pogardy.',
        authorId: 2,
        isbn: 'jakis-tam',
        categoryId: 2,
        carrierId: 2,
        coverId: 2,
        price: 17,
        cover: 'https://naekranie.pl/wp-content/uploads/2014/12/czas_pogardy_nowa_edycja_large-1413970597.jpg',
        soldQuantity: 6
    }

];

const generateId = () => {
    return persistedState.books.length ? Math.max(0, ...persistedState.books.map(c => c.id)) + 1 : 1;
};

class BookApi {
    static getAllBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], books));
            }, delay);
        });
    }

    static getAllBooksBySoldQuantity() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], books.sort((a,b)=>{return b.soldQuantity - a.soldQuantity})));
            }, delay);
        });
    }
    static getAllBooksSortedByNewest() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], books.sort((a,b)=>{return b.id - a.id})));
            }, delay);
        });
    }

    static saveBook(book) {
        book = Object.assign({}, book);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minBookNameLength = 3;
                if (book.title.length < minBookNameLength) {
                    reject(`Book Name must be at least ${minBookNameLength} characters.`);
                }

                if (book.id) {
                    const existingAuthorIndex = books.findIndex(a => a.id === book.id);
                    books.splice(existingAuthorIndex, 1, book);
                } else {
                    book.id = generateId(book);
                    books.push(book);
                }
                resolve(book);
            }, delay);
        });
    }

    static deleteBook(bookId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfBookToDelete = books.findIndex(book => {
                    book.id == bookId;
                });
                books.splice(indexOfBookToDelete, 1);
                resolve();
            }, delay);
        });
    }
    static getInitialState(){
        return Object.assign([], books);
    }
}

export default BookApi;
