import axios from "axios";

const Base_Url = 'https://dummyjson.com';

export const fetchEmployeeData = async () => {  //exported fetchEmpData..

    try{
        const response = await axios.get(`${Base_Url}/users`); //saperated base url if wanted to connect with backend.
        console.log("Successfully Fetched API Data :", response.data);
        
        return response.data;
    }catch(error){
        console.log("Error, While Fetching API Data :", error);
        throw error;
    }
}
