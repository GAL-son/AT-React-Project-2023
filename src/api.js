import axios from "axios";

const apiURL = "https://at.usermd.net/api";

function getAPIEndpoint(endpoint, params="") {
    return apiURL+'/'+endpoint+params;
}

// MOVIE PART
export function getMovies() {
    return axios.get(getAPIEndpoint("movies"))
        .then(res => {return res.data})
        .catch(err => {throw err})
}

export function getMovieDetails(id) {
    console.warn(`${apiURL}/movies/${id}`)
    return axios.get(getAPIEndpoint(`movies/${id}`))
        .then(res => {return res.data;})
        .catch(err => {throw err})
}

export function postMovie(title, img, content, genre="", rate="", year="") {
    return axios.post(getAPIEndpoint("movies"), {
        title: title,
        image: img,
        content: content,
        genre: genre,
        rate: rate,
        productionYear: year
    })
        .then(res => {return res.data})
        .catch(err => {throw err})
}

export function deleteMovie(id) {
    return axios.delete(getAPIEndpoint(`movie/${id}`), {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
        .then(res => {return res.data;})
        .catch(err => {throw err})
}

// USER PART
export function registerUser (name, email, password) {
    return axios.post(getAPIEndpoint('user/create'),{
        name: name,
        email: email,
        password: password
    })
        .then(response => {return response.data})
        .catch(err => {throw err})
}

export function authUser(login, password) {
    return axios.post(getAPIEndpoint('user/auth'),{
        login: login,
        password: password
    })
        .then(response => {return response.data})
        .catch(err => {throw err})
}

export const logoutUser = (userId) => {
    return axios.delete(getAPIEndpoint(`user/logout/${userId}`))
        .then(res => {return res})
        .catch(err => {throw err})
}