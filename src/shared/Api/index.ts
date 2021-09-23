import axios from 'axios';
let urlLocal = 'http://localhost:2900/api/'

export const loginAdmin = ({ user, pass }) => {
    const endpoint = `login-user`
    return new Promise<any>((resolve, reject) => {
        axios.post(urlLocal + endpoint, {username: user, password: pass})
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const registerAdmin = (data) => {
    const endpoint = `create-user`
    console.log(data);
    
    return new Promise<String>((resolve, reject) => {
        axios.post(urlLocal + endpoint, data)
            .then(res => {
                console.log(res.data);
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}


export const createProduct = (data) => {
    const endpoint = `create-product`
    return new Promise<String>((resolve, reject) => {
        axios.post(urlLocal + endpoint, data)
            .then(res => {
                console.log(res.data);
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getProducts = () => {
    const endpoint = `products`
    return new Promise<[]>((resolve, reject) => {
        axios.get(urlLocal + endpoint)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const deleteProduct = (data) => {
    let endpoint = `delete-product`
    console.log(urlLocal + endpoint);
    
    return new Promise<[]>((resolve, reject) => {
        axios.delete(urlLocal + endpoint, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const editProduct = (data) => {
    let endpoint = `edit-product`
    
    return new Promise<String>((resolve, reject) => {
        axios.patch(urlLocal + endpoint, data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
