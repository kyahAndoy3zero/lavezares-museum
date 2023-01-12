import axios from "axios"


const REMOTE_URL = "https://lavezares-museum-kzcrybxk3-kyahandoy3zero.vercel.app"
const API_URL = `${REMOTE_URL}/api/v1/reservations`


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
