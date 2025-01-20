import axios from 'axios'
// const api = "http://localhost:3000/videos";
const api = "https://67684145cbf3d7cefd377df4.mockapi.io/video"
export const obtenerDatos = async () => {
    try {
        const response = await axios.get(api)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const agregarDatos = async (data) => {
    try {
        const response = await axios.post(api, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const eliminarDatos = async (id) => {
    try {
        const response = await axios.delete(`${api}/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const editarDatos = async (id, data) => {
    try {
        const response = await axios.put(`${api}/${id}`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}