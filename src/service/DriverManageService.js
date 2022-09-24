import axios from "../axsios";

class DriverManageService{

    fetchDriver = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/driver')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    };

    deleteDriver = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('api/v1/driver', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    putDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('api/v1/driver', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteDriverImages = async (id) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('api/v1/driver/deleteDriverImage?id=' + id)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    driverCount = async (count) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/driver/driverCount/count', { params: count })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    fetchDriverData = async (paramsDriver) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/driver',{params:paramsDriver})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    fetchDriverbyUserName = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/driver',{params:params})
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



export default new DriverManageService()