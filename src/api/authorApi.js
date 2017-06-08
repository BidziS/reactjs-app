import delay from './delay';

const authors = [
    {
        id: 1,
        name: 'Wiedźmin. Czas pogardy.',
        surname: 'Smith',
        country:{
            name: 'Poland',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/250px-Flag_of_Poland_%28normative%29.svg.png'
        }
    },
    {
        id: 1,
        name: 'Cory',
        surname: 'Smith',
        country:{
            name: 'Poland',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/250px-Flag_of_Poland_%28normative%29.svg.png'
        }
    }
];

const generateId = () => {
    return authors[authors.length - 1].id + 1;
};

class AuthorApi {
    static getAllBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], authors));
            }, delay);
        });
    }

    static saveAuthor(author) {
        author = Object.assign({}, author);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minBookNameLength = 3;
                if (author.name.length < minBookNameLength) {
                    reject(`Author Name must be at least ${minBookNameLength} characters.`);
                }

                if (author.id) {
                    const existingAuthorIndex = authors.findIndex(a => a.id === author.id);
                    authors.splice(existingAuthorIndex, 1, author);
                } else {
                    author.id = generateId(author);
                    authors.push(author);
                }
                resolve(author);
            }, delay);
        });
    }

    static deleteBook(authorId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = authors.findIndex(author => {
                    author.id == authorId;
                });
                authors.splice(indexOfAuthorToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default AuthorApi;
