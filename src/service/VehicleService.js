
import axios from "../axsios";

class VehicleService {
    postVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('api/v1/vehicle', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchVehicle = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/vehicle')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    }

    putVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('api/v1/vehicle', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteVehicle = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('api/v1/vehicle', {params: params})
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



export default new VehicleService();