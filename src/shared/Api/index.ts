import axios from 'axios';
let url = 'https://morning-hamlet-18619.herokuapp.com/api/v1/'

export const register = (data) => {
    const endpoint = `form`
    console.log(data);
    
    return new Promise<String>((resolve, reject) => {
        axios.post(url + endpoint, data)
            .then(res => {
                console.log(res.data);
                resolve(res.data)
            })
            .catch(err => {               
                reject(err)
            })
    })
}