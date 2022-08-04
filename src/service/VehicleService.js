
import axios from "../axsios";

class VehicleService {

    addCarImage = async (data,vehicleId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('api/v1/vehicle/addCarImage?vehicleId='+vehicleId,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    getCarImage = async (vehicleId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/vehicle/getCarImage?vehicleId='+vehicleId+'&view='+view, {
                responseType: 'blob',
            })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    updateCarImage =async (data,vehicleId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('api/v1/vehicle/updateCarImage?vehicleId='+vehicleId+'&view='+view,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    deleteCarImages =async (vehicleId) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('api/v1/vehicle/deleteCarImage?vehicleId='+vehicleId)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

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