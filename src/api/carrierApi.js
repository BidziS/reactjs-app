import delay from './delay';

const carriers = [
    {
        id: 1,
        name: 'CD'

    },
    {
        id: 2,
        name: 'DVD'

    },
    {
        id: 3,
        name: 'Pendrive'

    }
];

const generateId = () => {
    return carriers.length ? carriers[carriers.length - 1].id + 1 : 1;
};

class CarrierApi {
    static getAllCarriers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], carriers));
            }, delay);
        });
    }

    static saveCarrier(carrier) {
        carrier = Object.assign({}, carrier);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCarrierNameLength = 2;
                if (carrier.name.length < minCarrierNameLength) {
                    reject(`Carrier name must be at least ${minCarrierNameLength} characters.`);
                }

                if (carrier.id) {
                    const existingCarrierIndex = carriers.findIndex(a => a.id === carrier.id);
                    carriers.splice(existingCarrierIndex, 1, carrier);
                } else {
                    carrier.id = generateId(carrier);
                    carriers.push(carrier);
                }
                resolve(carrier);
            }, delay);
        });
    }

    static deleteCarrier(carrierId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCarrierToDelete = carriers.findIndex(carrier =>
                    carrier.id == carrierId
                );
                carriers.splice(indexOfCarrierToDelete, 1);
                resolve(carrierId);
            }, delay);
        });
    }
}

export default CarrierApi;
