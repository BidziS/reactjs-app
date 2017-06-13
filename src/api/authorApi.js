import delay from './delay';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const authors = [
    {
        id: 1,
        name: 'Wiedźmin. Czas pogardy.',
        surname: 'Smith',
        countryId: 1
    },
    {
        id: 2,
        name: 'Cory',
        surname: 'Smith',
        countryId: 2
    },
    {
        id: 3,
        name: 'Cory',
        surname: 'Smith',
        countryId: 3
    }
];

const generateId = () => {
    return persistedState.authors.length ? Math.max(0, ...persistedState.authors.map(c => c.id)) + 1 : 1;
};

class AuthorApi {
    static getAllAuthors() {
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
                const minAuthorNameLength = 3;
                if (author.name.length < minAuthorNameLength) {
                    reject(`Author name must be at least ${minAuthorNameLength} characters.`);
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

    static deleteAuthor(authorId) {
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

    static getInitialState() {
        return Object.assign([], authors);
    }
}

export default AuthorApi;
