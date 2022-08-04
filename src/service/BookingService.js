import axios from "../axsios";

class BookingService{

    bookingCount = async (count) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/booking/bookingCount/count', { params: count })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    fetchBooking = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('api/v1/booking')
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

export default new BookingService();