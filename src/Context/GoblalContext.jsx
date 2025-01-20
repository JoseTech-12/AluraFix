import { createContext, useEffect, useState, useContext } from "react";
import { obtenerDatos, agregarDatos, eliminarDatos, editarDatos } from '../Servicios/servicio'



export const ContextGlobal = createContext()

export const ContextGlobalProvaider = ({ children }) => {
    const [datos, setDatos] = useState([]);
    const [modal, setModal] = useState(false)
    const [video, setVideo] = useState('')
    const [videoSeleccionado, setVideoSeleccionado] = useState({});

    useEffect(() => {
        fetchvideos()
    }, [])

    const fetchvideos = async () => {
        const listado = await obtenerDatos()

        setDatos(listado)
    }

    const agregarVideo = async (nuevoVideo) => {
        try {
            const videoAgregado = await agregarDatos(nuevoVideo)
            setDatos((prevDatos) => [...prevDatos, videoAgregado])
        } catch (error) {
            console.log(error)
        }

    }
    const eliminarVideo = async (id) => {
        try {
            const videoEliminado = await eliminarDatos(id)
            setDatos((prevDatos) => prevDatos.filter(video => video.id !== id));
        } catch (error) {
            console.log(error)
        }
    }
    const editarVideo = async (id, videoEditado) => {
        try {
            const edit = await editarDatos(id, videoEditado)
            setDatos((prevDatos) => prevDatos.map(video => video.id === id ? edit : video))
        } catch (error) {
            console.log(error)
        }
    }


    const abrirCerrarModal = () => {
        setModal(!modal)
    }
    const seleccionarVideoParaEditar = (video) => {
        setVideoSeleccionado(video);
        abrirCerrarModal();

    };
    const valores = {
        datos,
        setDatos,
        agregarVideo,
        eliminarVideo,
        modal,
        abrirCerrarModal,
        editarVideo,
        seleccionarVideoParaEditar,
        videoSeleccionado,
        setVideo,
        video
    }

    return (
        <ContextGlobal.Provider value={valores} >
            {children}
        </ContextGlobal.Provider>
    )

}
export const useGlobalContext = () => {
    const context = useContext(ContextGlobal)
    if (!context) {
        throw new Error('useGlobalContext must be used within a ContextGlobalProvaider')

    }

    return context
}