import { getToken } from './token';

const envUrl = process.env[process.env.NODE_ENV];

export async function getUserApi(id) {
    const url = `${envUrl}/users/${id}`;
    const token = await getToken();
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, params)
        .then(response => response.json())
        .then(response => response.data)
        .catch(err => err);
}

//Get Users List
export async function getUserListApi(page = 1) {
    const url = `${envUrl}/users?page=${page}`
    const token = await getToken();
    const params = {
        method: 'GET',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(url, params)
        .then(response => response.json())
        .then(response => response.data)
        .catch(err => err);
}

//Create User
export async function createUserApi(data) {
    const url = `${envUrl}/users/userbyadminpanel`
    const token = await getToken();
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(url, data, params)
        .then(response => response.json())
        .then(response => response.data)
        .catch(err => err);
}

//Update User
export async function updateUserApi(data) {
    const url = `${envUrl}/users/${data._id}`
    const token = await getToken();
    const params = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(url, data, params)
        .then(response => response.json())
        .then(response => response.data)
        .catch(err => err);
}

//Delete User
export async function deleteUserApi(id) {
    const url = `${envUrl}/users/${id}`
    const token = await getToken();
    const params = {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, params)
        .then(response => response.json())
        .then(response => response.data)
        .catch(err => err);
}