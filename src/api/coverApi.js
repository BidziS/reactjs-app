import delay from './delay';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const covers = [
    {
        id: 1,
        name: 'Ladna'

    },
    {
        id: 2,
        name: 'Brzydka'

    },
    {
        id: 3,
        name: 'Taka se'

    }
];

const generateId = () => {
    return persistedState.covers.length ? Math.max(0, ...persistedState.covers.map(c => c.id)) + 1 : 1;
};

class CoverApi {
    static getAllCovers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], covers));
            }, delay);
        });
    }

    static saveCover(cover) {
        cover = Object.assign({}, cover);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCarrierNameLength = 2;
                if (cover.name.length < minCarrierNameLength) {
                    reject(`Cover name must be at least ${minCarrierNameLength} characters.`);
                }
                if (cover.id) {
                    const existingCoverIndex = covers.findIndex(a => a.id === cover.id);
                    covers.splice(existingCoverIndex, 1, cover);
                } else {
                    cover.id = generateId(cover);
                    covers.push(cover);
                }
                resolve(cover);
            }, delay);
        });
    }

    static deleteCover(coverId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCoverToDelete = covers.findIndex(cover =>
                    cover.id == coverId
                );
                covers.splice(indexOfCoverToDelete, 1);
                resolve(coverId);
            }, delay);
        });
    }
    static getInitialState(){
        return Object.assign([], covers);
    }
}

export default CoverApi;
