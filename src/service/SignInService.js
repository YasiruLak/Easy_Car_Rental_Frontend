import axios from "../axsios";


class SignInService{
    fetchUser = async (params) => {
        const promise = new Promise((resolve, reject) => {

            axios.get('api/v1/login',{params:params})    // 20s
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

export default new SignInService();
