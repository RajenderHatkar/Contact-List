import axios from 'axios';
const url='https://jsonplaceholder.typicode.com/users'
/*getting data from API*/ 
export async function getData() {
  
    try {
      
        const response = await axios.get(`${url}`);
       
        return response;
    } catch (error) {
        console.error("Error in fectching data:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
/* adding a contat */
export async function postData(data) {
    console.log(data)
    try {
        const response = await axios.post(url, data);
        return response.data;
      } catch (error) {
        console.error("Error adding contact:", error);
        throw error;
      }
}

/*export async function putData(id, data) {
    return await axios.put(`${url}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}*/
/** editing the contact */
export async function putData(id, data) {
    try {
        const response = await axios.put(`${url}/${id}`, data);
        return response.data;
      } catch (error) {
        console.error("Error updating contact:", error);
        throw error;
      }
}
/** deleting contact */
export async function deleteData(id) {
    try {
        console.log("id: " + id);
        const response = await axios.delete(`${url}/${id}`);
        console.log("acc deleted")
        return response;
    } catch (error) {
        console.error("Error deleting data:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

