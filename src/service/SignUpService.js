import axios from "../axsios";

class SignUpService{
    postSignUpCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('api/v1/signup/customer', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    postSignUpDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('api/v1/signup/driver', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }
}

export default new SignUpService();