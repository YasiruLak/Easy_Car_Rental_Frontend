import axios from "../axsios";

class PaymentService{
    postPayment = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('api/v1/payment', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchPayment = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/payment')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putPayment = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('api/v1/payment', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deletePayment = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('api/v1/payment', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };
}

export default new PaymentService();