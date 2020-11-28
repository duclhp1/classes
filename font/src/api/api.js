import axios from "axios";

const baseURL = "http://localhost:3001/";
const api = axios.create({
    baseURL,
    timeout: 1000,
})

const setKey = async () => {
    const key = await localStorage.getItem("key")
    api.defaults.headers = {...api.defaults.headers, key}
}

export const getListStudent = async () => {
    await setKey();
    console.log("getListStudent", api.defaults)
    return api.get("/student/getStudent")
}

export const login = async (username, password) => {
    await setKey();
    return api.post("/admin/login", {username, password})
}
