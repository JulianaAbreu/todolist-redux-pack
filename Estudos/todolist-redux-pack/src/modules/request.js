import axios from 'axios';

const instance = axios.create();

const API = "http://localhost:4000";

export const get = (url) => {
    return request(url, {
        method: 'GET'
    })
}

export const post = (url, data) => {
    return request(url, {
        method: 'POST',
        data,
    })
}

export const patch = (url, data) => {
    return request(url, {
        method: 'PATCH',
        data,
    })
}

export const remove = (url, id) => {
    return request(url, {
        method: 'DELETE',
    })
}

export const request = (url, { contentType = "application/json", ...customOptions }) => {
    const headers = {};

    if (contentType) {
        headers['Content-Type'] = contentType
    }

    const options = {
        ...customOptions,
        headers,
    }

    return axios(`${API}/${url}`, options).then(response => response.data).catch((error) => {} );
}