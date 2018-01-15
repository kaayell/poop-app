import axios from 'axios'

const instance = axios.create();

let apiUrl = "http://localhost:8080"
// apiUrl = "https://night-soil-api.cfapps.io"

// export function setHeader(token) {
//     instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

export function getHuman(email) {
    return instance.get(`${apiUrl}/human?email=${email}`)
}

export function createHuman(human) {
    return instance.post(`${apiUrl}/human`, human)
}

export function updateHuman(human) {
    return instance.put(`${apiUrl}/human`, human)
}

export function createLog(logData) {
    return instance.post(`${apiUrl}/human/${logData.humanId}/log`, logData)
}

export function getSummary(humanId) {
    return instance.get(`${apiUrl}/human/${humanId}/log/summary`)
}
