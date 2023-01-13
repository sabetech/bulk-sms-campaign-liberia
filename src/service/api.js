import axios from "axios";
const BASEURL = import.meta.env.VITE_INFOBIP_BASEURL
const TOKEN = import.meta.env.VITE_INFOBIP_TOKEN;

export const sendMessage = async (message, destinations) => {
    try {
        const response = await axios.post(`${BASEURL}/sms/2/text/advanced`, {
            headers: {
                "Authorization": `App ${TOKEN}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: {
                "messages": [
                    {
                        "from": "InfoSMS",
                        "destinations": destinations,
                        "text": message,
                    }
                ]
            }
        });
        return response.data;
    }catch (error) {
        console.log(error);
        throw new Error(`Source:::sendMessage(): API->Error: ${e.message()}`);
    }
}

export const createPeople = async (people) => {
    try {
        const response = await axios.post(`${BASEURL}/people/2/persons/batch`, {
            headers: {
                "Authorization": `App ${TOKEN}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: people
        });
        return response.data;
    }catch (error) {
        console.log(error);
        throw new Error(`Source:::createPeople(): API->Error: ${e.message()}`);
    }
}