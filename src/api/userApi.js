import delay from './delay';

const users = [
    {
        id: 1,
        login: 'daniel',
        password: 'cudnik',
        role: 'admin'
    },
    {
        id: 2,
        login: 'user',
        password: 'cudnik',
        role: 'user'
    }
];

const generateId = () => {
    return users[users.length - 1].id + 1;
};

class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
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
                    const existingAuthorIndex = users.findIndex(a => a.id === author.id);
                    users.splice(existingAuthorIndex, 1, author);
                } else {
                    author.id = generateId(author);
                    users.push(author);
                }
                resolve(author);
            }, delay);
        });
    }

    static deleteBook(authorId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = users.findIndex(author => {
                    author.id == authorId;
                });
                users.splice(indexOfAuthorToDelete, 1);
                resolve();
            }, delay);
        });
    }
    static loginUser(userLogin) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userToFind = users.filter(user => user.login == userLogin.login);
                if(userToFind.length !== 0){
                    if(userLogin.password == userToFind[0].password){
                        resolve(userToFind[0]);
                    }
                    else {
                        resolve({});
                    }
                }else {
                    resolve({});
                }
            }, 2000);
        });
    }
    static logoutUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve({})
            }, 2000);
        });
    }
}

export default UserApi;
