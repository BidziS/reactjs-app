import delay from './delay';

const books = [
    {
        id: 1,
        title: 'Wiedźmin. Czas pogardy.',
        author:{
            id: 1,
            name: 'Cory',
            surname: 'Smith',
            country:{
                name: 'Poland',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/250px-Flag_of_Poland_%28normative%29.svg.png'
            }
        },
        isbn: 'jakis-tam',
        category:{
            name: 'taka se'
        },
        carrier: {
            name: 'CD'
        },
        cover_type:{
            name: 'miękka'
        },
        price: 17,
        cover: 'https://naekranie.pl/wp-content/uploads/2014/12/czas_pogardy_nowa_edycja_large-1413970597.jpg'
    },
    {
        id: 2,
        title: 'Wiedźmin. Miecz przeznaczenia.',
        author:{
            id: 1,
            name: 'Cory',
            surname: 'Smith',
            country:{
                name: 'Poland',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/250px-Flag_of_Poland_%28normative%29.svg.png'
            }
        },
        isbn: 'jakis-tam',
        category:{
            name: 'taka se'
        },
        carrier: {
            name: 'CD'
        },
        cover_type:{
            name: 'miękka'
        },
        price: 17,
        cover: 'http://ecsmedia.pl/c/wiedzmin-tom-2-miecz-przeznaczenia-b-iext44036396.jpg'
    }

];

const generateId = () => {
    return books[books.length - 1].id + 1;
};

class BookApi {
    static getAllBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], books));
            }, delay);
        });
    }

    static saveBook(book) {
        book = Object.assign({}, book);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minBookNameLength = 3;
                if (book.name.length < minBookNameLength) {
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
}

export default BookApi;
