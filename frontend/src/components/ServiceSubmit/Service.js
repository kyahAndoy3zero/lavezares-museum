import axios from "axios"


const API_URL = "/api/v1/reservations"
const URL = "https://lavezares-museum.vercel.app"

const createInquiry = async (personData) => {
    try {
        const response = await axios.post(URL + API_URL, personData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


const Service = {
    createInquiry,
};

export default Service;
