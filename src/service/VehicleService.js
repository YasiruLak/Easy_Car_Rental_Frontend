import axsios from "../axsios";
import axios from "axios";

class VehicleService{
    postVehicle = async (data) =>{
        const promise = new  Promise((resolve, reject) =>{
            axios.post('customer')
                .then((res) =>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        });

        return await promise
    }
}

export default new VehicleService();