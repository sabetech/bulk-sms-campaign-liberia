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
        throw new Error(`Source:::sendMessage(): API->Error: ${error.message()}`);
    }
}

export const createPeople = async (people) => {
    console.log("PEOPLE HERE:::", people)
    try {
        const response = await axios.post(`https://${BASEURL}/people/2/persons/batch`, people,
        {
            headers: {
                "Authorization": `App ${TOKEN}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        return response.data;
    }catch (error) {
        console.log(error);
        throw new Error(`Source:::createPeople(): API->Error: ${error.message}`);
    }
}

const getPeople = async () => {
    try {
        const response = await axios.get(`${BASEURL}/people/2/persons`, {
            headers: {
                "Authorization": `App ${TOKEN}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }catch ( error ){
        console.log( err );
        throw new Error(`Source:::getPeople(): API->Error: ${error.message()}`);
    }
}