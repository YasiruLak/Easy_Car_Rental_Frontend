import axios from "axios";

//base_url
const instance = axios.create({
    //baseURL
    baseURL: 'http://localhost:8080/Car_Rental_Backend_war/'
    // Header
    // timeout
})
export default instance;