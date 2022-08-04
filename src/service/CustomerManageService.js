import axios from "../axsios";

class CustomerManageService{

    fetchCustomer = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/customer')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    };

    deleteCustomer = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('api/v1/customer', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    putCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('api/v1/customer', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteCustomerImages = async (id) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('api/v1/customer/deleteCustomerImage?id=' + id)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

}


export default new CustomerManageService();